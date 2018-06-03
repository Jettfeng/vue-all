const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV == 'development'//判断是否是开发环境

const defaultPlugins = [
    new webpack.DefinePlugin({//
        'process.env':{
            NODE_ENV:isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin()
]

const devServer = {
    port:8000,//启动端口
    host:'192.168.0.107',//
    overlay:{//将错误显示在网页上
        errors:true
    },
    open:true,//自动打开页面
    hot:true//单页应用修改数据时只重新渲染当组件
}

let config

if(isDev){//开发环境
    // stylus根据环境不同进行不同的配置
    config = merge(baseConfig,{
        devtool:'#cheap-module-eval-source-map',
        module:{
            rules:[
                {
                    test:/\.styl$/,
                    use:[
                        'vue-style-loader',
                        {
                            loader:'css-loader',
                            options:{
                                module:true,
                                localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        'stylus-loader'
                    ]
                }
            ]
        },
        devServer,
        plugins:defaultPlugins.concat([
                new webpack.HotModuleReplacementPlugin(),//启动webpackhotmodule功能
                new webpack.NoEmitOnErrorsPlugin(),//
                new webpack.DefinePlugin({//
                    'process.env':{
                        NODE_ENV:isDev ? '"development"' : '"production"'
                    }
                }),
                new HTMLPlugin()
            ])
    })
}else{
    config = merge(baseConfig,{
        entry: {
            app:path.join(__dirname,'../client/index.js'),
            vendor:['vue']
        },
        output:{
            filename:'[name].[chunkhash:8].js'
        },
        module:{
            rules:[
                {
                    test:/\.styl$/,
                    use:ExtractPlugin.extract({
                        fallback:'vue-style-loader',
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
                }
            ]
        },
        plugins:[
            new ExtractPlugin('style.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name:'vendor'//提取vue类库
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:'runtime'//分离
            })
        ]
    })
}
module.exports = config
