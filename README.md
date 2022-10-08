# lingjie-demo

English | [中文](/README-ZH.md)

Demo of lingjie + monorepo. 

The monorepo is built with pnpm + Vite + React + Antd + TypeScript.
## Introduction


Importing lingjie scripts and configuring some variables are the only two things needed to connect lingjie. Since lingjie acts as an `iframe manager`, its build/deployment is very flexible.


Lingjie supports both **run-time integration** and **build-time integration**. This repo shows both. You may choose one of them that fits your needs.

## Suggestions

You may find the configuration of both [lingjie-shell](https://github.com/lingjie-js/lingjie-demo/blob/main/packages/lingjie/index.html#:~:text=%3Cscript%20src%3D%22https%3A//bolan6180.github.io/lingjie%2Ddemo/lingjie%2Dshell/shell%2Dconfig.js%22%3E%3C/script%3E) and [micro-apps](https://github.com/lingjie-js/lingjie-demo/blob/main/packages/project-a/index.html#:~:text=%3Cscript%20src%3D%22https%3A//bolan6180.github.io/lingjie%2Ddemo/projects/project%2Da/config.js%22%3E%3C/script%3E) in the remote. We do this intentionally.

Both lingjie-shell and micro-apps have the switch to connect lingjie. Micro-apps would connect to the lingjie micro-frontend only if the switch opened on both sides.

If the condition allows, we recommend configuring lingjie-shell and micro-app remotely. Thus, you can connect/disconnect lingjie by only changing the remote config, and there is no need to modify the project code.

As shown below
<div align="center">
 <img src="./assets/lingjie-demo-chart.png" alt="lingjie-demo-chart" style="display:block; margin:0 auto; width:80%">
</div>

It's worth mentioning that the actions of connecting/disconnecting lingjie will not bring any side-effect to lingjie-shell and existing micro-apps. 

## File Structure
```
|- assets
|- dist         // build-time integration
|- packages
  |-lingjie     // lingjie-shell
  |-project-a   // project a
  |-project-b   // project b
  |-project-c   // project c
  |-server      // proxy server
  |-shard       // shared component
|-.gitignore
|-.npmrc
|-package.json
|-pnpm-lcok.yaml
|-pnpm-workspace.yaml
|-README-ZH.md
|-README.md
```

## How to use

###  Method 1: build-time integration
The final product, lingjie-shell, and all micro-apps are placed under the same folder.
   
Install dependencies
```bash
pnpm i
```
build lingjie-shell and micro-apps
```bash
pnpm build:micro-frontend
```
preview
```bash
pnpm preview
```
open [http://localhost:4173/project-a/index.html](http://localhost:4173/project-a/index.html) in the browser.

<div align="center">
 <img src="./assets/demo-build-time-integration.gif" alt="demo" style="display:block; margin:0 auto; width:80%">
</div><br/><br/>


### Method 2：run-time integration

Lingjie-shell and micro-apps are running on different servers. The micro-apps will redirect to lingjie-shell by the proxy server.

We use node as the proxy server in the demo. You may also choose other proxy servers in your project, like Nginx.

Install dependencies
```bash
pnpm i
```
build lingjie-shell and micro-apps
```bash
pnpm build:standalone-app
```
build proxy server
```bash
pnpm build:standalone-app
```
run proxy server, lingjie-shell, and all micro-apps
```bash
pnpm serve
```
> proxy server: [http://localhost:8060](http://localhost:8060)

> project-a: [http://localhost:8091/project-a](http://localhost:8091/project-a)

> project-b: [http://localhost:8092/project-b](http://localhost:8092/project-b)

> project-c: [http://localhost:8093/project-c](http://localhost:8093/project-c)

> lingjie-shell: [http://localhost:3033](http://localhost:3033)


open [http://localhost:8060/project-a](http://localhost:8060/project-a) in the browser

<div align="center">
 <img src="./assets/demo-run-time-integration.gif" alt="demo" style="display:block; margin:0 auto; width:80%">
</div><br/><br/>