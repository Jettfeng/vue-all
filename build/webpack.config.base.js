const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV == 'development'//判断是否是开发环境

const config = {
    target:'web',
    entry:path.join(__dirname,'../client/index.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'../dist'),
        publicPath: 'http://127.0.0.1:8000/public/'
    },
    module:{
        rules:[
            // {
            //     test:/\.(vue|js|jsx)$/,//eslit检测
            //     loader:'eslint-loader',
            //     exclude:'/node_modules/',
            //     enforce:'pre'//对这几种文件进行预处理（在各个文件相应loader处理文件之前进行预处理）
            // },
            {
                test:/\.vue$/,
                use:[
                    {
                        loader: 'vue-loader',
                        options:createVueLoaderOptions(isDev)
                    }
                ]
            },
            {
                test:/\.jsx$/,
                use:'babel-loader'
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                          limit: 1024,//小于8192kb转换成base64
                          name:'resource/[path][name].[hash:8].[ext]'//ext代表后缀扩展名,path为当前路径的变量
                        }
                      }
                ]
            }
        ]
    }
}

module.exports = config
