const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV == 'development'//判断是否是开发环境

const config = {
    target:'web',
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.jsx$/,
                use:'babel-loader'
            },
            // {
            //     test:/\.css$/,
            //     use:[
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            // {
            //     test:/\.styl$/,
            //     use:[
            //         'style-loader',
            //         'css-loader',
            //         {
            //             loader:'postcss-loader',
            //             options:{
            //                 sourceMap:true
            //             }
            //         },
            //         'stylus-loader'
            //     ]
            // },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                          limit: 8192,//小于8192kb转换成base64
                          name:'[name].[ext]'//ext代表后缀扩展名
                        }
                      }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({//
            'process.env':{
                NODE_ENV:isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if(isDev){//开发环境
    // stylus根据环境不同进行不同的配置
    config.module.rules.push({
        test:/\.styl$/,
        use:[
            'style-loader',
            'css-loader',
            {
                loader:'postcss-loader',
                options:{
                    sourceMap:true
                }
            },
            'stylus-loader'
        ]
    }),
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port:8000,//启动端口
        host:'192.168.0.107',//
        overlay:{//将错误显示在网页上
            errors:true
        },
        open:true,//自动打开页面
        hot:true//单页应用修改数据时只重新渲染当组件
    }
    config.plugins.push(//不刷新页面更改数据配置
        new webpack.HotModuleReplacementPlugin(),//启动webpackhotmodule功能
        new webpack.NoEmitOnErrorsPlugin()//
    )
}else{
    config.entry = {
        app:path.join(__dirname,'src/index.js'),
        vendor:['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push({
        test:/\.styl$/,
        use:ExtractPlugin.extract({
            fallback:'style-loader',
             use:[
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap:true
                    }
                },
                'stylus-loader'
            ]
        })
    })
    config.plugins.push(
        new ExtractPlugin('style.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'//提取vue类库
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'//分离
        })
    )
}
module.exports = config
