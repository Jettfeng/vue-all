<h3>2-4:安装使用eslint和editorcofig以及precommit</h3
<p>1.安装：npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D</p>
<p>2.npm i eslint-plugin-html -D(识别文件中script标签下面的js代码)</p>
<p>3.配置.eslintrc文件</p>
<p>4.配置package.json文件："lint":"eslint --ext .js --ext .jsx --ext .vue client/",</p>
<p>表示eslint检测 client文件夹下面的 .js .jsx .vue文件,npm run lint 查看哪些不符合规则</p>
<p>5.eslit自动修复： "lint-fix":"eslint --fix --ext .js --ext .jsx --ext .vue client/",--fix：修复（不修复'=='为'==='）</p>
<p>安装：npm i eslint-loader babel-loader</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>

       
       
    