# lingjie-demo

[English](/README.md) | 中文

本仓库是零界微前端的一个示例，用零界微前端管理基于 pnpm + Vite + React + Antd + TypeScript 搭建的 MonoRepo。

## 介绍

接入零界微前端只需要 **引入零界提供的脚本** 和 **配置一些变量** ，零界扮演的是一个 `iframe manager` 的角色，所以它的 构建/部署 方式非常灵活。

零界既支持 `run-time integration`，也支持 `build-time integration`。项目中同时展示了这两种方式的使用方法，在实际开发中可根据项目需求选择合适的构建/部署的方式。

## 建议

在demo中，可以发现所有关于 [零界shell](https://github.com/lingjie-js/lingjie-demo/blob/main/packages/lingjie/index.html#:~:text=%3Cscript%20src%3D%22https%3A//bolan6180.github.io/lingjie%2Ddemo/lingjie%2Dshell/shell%2Dconfig.js%22%3E%3C/script%3E) 和 [微应用](https://github.com/lingjie-js/lingjie-demo/blob/main/packages/project-a/index.html#:~:text=%3Cscript%20src%3D%22https%3A//bolan6180.github.io/lingjie%2Ddemo/projects/project%2Da/config.js%22%3E%3C/script%3E) 的配置都远程的，我们是有意这样做的。

在零界中，零界shell和所有的微应用都有接入、退出零界的配置，当双方都开启接入时，微应用才能接入零界。

所以，如果服务器允许，我们推荐将 零界 shell 和所有的微应用的配置，都放在远程，作为一个开关，这样可以在不改动零界shell和微应用的情况下，通过修改远程配置来随时接入、退出零界微前端，极大地提升项目的扩展性、维护性、安全性。

如下图所示
<div align="center">
 <img src="./assets/lingjie-demo-chart.png" alt="lingjie-demo-chart" style="display:block; margin:0 auto; width:80%">
</div>


值得一提的是，所有微应用的接入、退出，不会给零界中已经接入的微应用带来任何副作用。

## 目录结构
```
|- assets
|- dist         // 打包后生成，build-time integration最终项目代码
|- packages
  |-lingjie     // 零界shell
  |-project-a   // 项目 a
  |-project-b   // 项目 b
  |-project-c   // 项目 c
  |-server      // 代理服务器
  |-shard       // 共享组件
|-.gitignore
|-.npmrc
|-package.json
|-pnpm-lcok.yaml
|-pnpm-workspace.yaml
|-README-ZH.md
|-README.md
```

## 如何使用

### 方式一： build-time integration（构建时集成）
最终产物中，零界shell和微应用都放在同一目录下。
   
安装依赖
```bash
pnpm i
```
构建零界shell和微应用
```bash
pnpm build:micro-frontend
```
预览项目
```bash
pnpm preview
```
打开网页 [http://localhost:4173/project-a/index.html](http://localhost:4173/project-a/index.html)

<div align="center">
 <img src="./assets/demo-build-time-integration.gif" alt="demo" style="display:block; margin:0 auto; width:80%">
</div><br/><br/>

### 方式二：run-time integration（运行时集成）

零界shell和微应用运行在不同的服务器中，通过代理的方式将微应用转发到零界shell。

在demo中使用的是node服务器作为代理，只作为演示目的。在实际开发中，可以根据项目需求使用其他代理服务器，比如Nginx。

安装依赖
```bash
pnpm i
```
构建零界shell和微应用
```bash
pnpm build:standalone-app
```
构建proxy-server
```bash
pnpm build:standalone-app
```
一键启动代理服务器，零界shell服务器，和所有的微应用
```bash
pnpm serve
```
> 代理服务器地址: [http://localhost:8060](http://localhost:8060)

> project-a地址: [http://localhost:8091/project-a](http://localhost:8091/project-a)

> project-b地址: [http://localhost:8092/project-b](http://localhost:8092/project-b)

> project-c地址: [http://localhost:8093/project-c](http://localhost:8093/project-c)

> 零界shell地址: [http://localhost:3033](http://localhost:3033)


打开网页 [http://localhost:8060/project-a](http://localhost:8060/project-a)

<div align="center">
 <img src="./assets/demo-run-time-integration.gif" alt="demo" style="display:block; margin:0 auto; width:80%">
</div><br/><br/>