<h3>2-3:css module配置</h3
<p>1.配置</p>
<p>module.exports = (isDev) => {</p>
<p>return {</p>
<p>preserveWhitepace: true,//删除空格</p>
<p>extractCSS: !isDev,//提取vue文件中的css</p>
<p> cssModules: {</p>
<p> localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',</p>
<p>camelCase: true</p>
<p>},</p>
<p> // hotReload: false, // 根据环境变量生成，热重载</p>
<p>}</p>
<p>}</p>
<p>2.使用<p/>
<p>在vue文件中的style里面加module，vue文件中的style部分就会采用module配置的loader</p>    
<p><style lang="stylus" scoped module></p>
<p></style></p>
<p>修改header组件中的class，npm run dev查看即可</p>  
<p>修改footer组件，npm run dev查看</p>

       
       
    