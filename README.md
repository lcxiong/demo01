# vue3-webapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###
```
1、rem（font size of the root element）是指相对于 根元素 的字体大小的单位
tool/rem.ts

2、共同的 样式
style/common.css

3、UI库 Vue 3 项目，安装 Vant 3.x 版本 npm i vant@next -S

4、axios 
services/index.ts

5、组件化

6、模块化 

```
```
Composition API
1、setup

2、Lifecycle Hooks

3、Provide / Inject
provide and inject enables dependency injection. Both can only be called during setup() with a current active instance.
provide()和inject() 可以实现嵌套组件之间的数据传递.这两个函数只能在setup() 函数中使用. 父组件中使用 provide() 函数向下传递数据;  子组件中使用 inject() 获取上层传递过来的[provide()和inject() 方法,实现父组件向子子孙孙组件传递数据的方法]

4、getCurrentInstance
getCurrentInstance enables access to an internal component instance useful for advanced usages or for library creators.
```
