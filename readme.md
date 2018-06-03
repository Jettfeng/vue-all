<h3>todo4-4:webpack区分打包类库及hash优化</h3>
<p>区分打包类库</p>
<p>入口配置</p>
<p> config.entry = {</p>
<p> app:path.join(__dirname,'src/index.js'),</p>
<p> vendor:['vue']</p>
<p>}</p>
<p>插件配置</p>
<p>new webpack.optimize.CommonsChunkPlugin({</p>
<p>  name:'vendor'</p>
<p>})</p>
<p></p>
<p></p>
<p></p>
<p></p>

       
       
    