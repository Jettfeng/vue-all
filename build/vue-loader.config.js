const docsLoaders = require.resolve('./doc-loader')
module.exports = (isDev) => {
    return {
      preserveWhitepace: true,//删除空格
      extractCSS: !isDev,//提取vue文件中的css
      cssModules: {
        localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
        camelCase: true
      },
      // hotReload: false, // 根据环境变量生成，热重载
    }
  }