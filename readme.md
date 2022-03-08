# 初始化一个 vue 项目
- `npm install -g vue-cli `   
vue-cli 是 vue.js 的脚手架工具，可以帮助我们编写基础代码、快速搭建开发环境。
- 初始化 init
`vue init <模板名称> <项目名称>` 一般来说 模板使用 `webpack` 
- 下载依赖
`npm install` 或 `yarn`
> 初始化时会有提示：是否在项目初始化完成后帮我们自动安装依赖，npm install 方式 或 yarn 方式，或者手动安装，如果选择了是，则不用自己安装依赖
- 运行开发测试服务器，浏览器自动打开地址 http://localhost:8080/
`npm run dev` 
启动开发阶段的脚本
文件初始化完成
> 如果被占用，改为 8081 端口
- `npm run build`
运行命令 npm run build 后，项目中会自动生成一个 dist 目录
> 在dist目录下运行 live-server 服务将出现和 run dev 一样的界面，应用程序打包就是dist目录
- 错误 This dependency was not found: * !!vue-style-loader!css-loader?。。。
解决：安装 css 编译 `npm install stylus stylus-loader style-loader --save-dev`
