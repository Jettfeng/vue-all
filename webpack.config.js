const path = require('path')
module.exports = {
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.styl$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
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
    }
}