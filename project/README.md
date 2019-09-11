##### 这里是dev 分支

#### 文件目录结构
pages: 页面
comments: 组件
style： 样式
utils: 公有的库或者插件
store: 全局状态管理文件
asset: 资源目录

#### 预处理语言
less
npm install less less-loader
默认不支持 less  需要在所有的webpack.config.js   把所有的sass--》less
注意：本项目的less 版本和antd的版本保持一致  2.7.3
#### Ui框架
antd  less
npm install antd
全局引入（开发过程中）
    在index.js  import '/antd/dist/antd.css'
按需引入（线上环境）npm install babel-plugin-import
webpack.config.js    babel-loader
 ['import',{'libraryName':'antd','style':true}],

#### 基本配置
起别名:webpack.config.js  alias
        'style':path.join(__dirname,'../src/style')
        'style':path.resolve(__dirname,'../src/style')
服务器代理
...


#### 公有的库
npm install axios react-router-dom redux react-reduxr
axios  二次封装: React.Component.prototype.$axios=axios

路由
react-redux

#### 任务分工
1.主程：搭建项目的整体框架 以及配置
2.路人甲：配置路由
3.路人乙：写登录首页
