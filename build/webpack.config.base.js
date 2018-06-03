const path = require('path')

const isDev = process.env.NODE_ENV == 'development'//判断是否是开发环境

const config = {
    target:'web',
    entry:path.join(__dirname,'../client/index.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'../dist')
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
