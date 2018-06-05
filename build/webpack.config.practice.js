const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const defaultPlugins = [
    new webpack.DefinePlugin({//
        'process.env':{
            NODE_ENV:'"development"'
        }
    }),
    new HTMLPlugin()
]

const devServer = {
    port:8080,//启动端口
    host:'192.168.0.107',//
    overlay:{//将错误显示在网页上
        errors:true
    },
    open:true,//自动打开页面
    hot:true//单页应用修改数据时只重新渲染当组件
}

let config
config = merge(baseConfig,{
    entry:path.join(__dirname,'../practice/index.js'),
    devtool:'#cheap-module-eval-source-map',
    module:{
        rules:[
            {
                test:/\.styl$/,
                use:[
                    'vue-style-loader',
                    'css-loader',
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
    resolve:{
        alias:{
            'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),//启动webpackhotmodule功能
            new webpack.NoEmitOnErrorsPlugin(),//
            new webpack.DefinePlugin({//
                'process.env':{
                    NODE_ENV:'"development"'
                }
            }),
            new HTMLPlugin({
                template:path.join(__dirname,'template.html')
            })
        ])
})
module.exports = config
