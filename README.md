# React 学习记录
## 16.3.2版本===》React Fiber指的是react16版本或其底层实现
* **使用官方提供的Create-react-app脚手架工具====(缺少webpack配置功底)**
* 命令式的编程===》操作dom===>jq
* react【1.声明式开发；2.可以与其他框架并存；3.组件化；4.单向数据流；5.视图层框架；6.函数式编程】
* react单项数据流概念 === 向子组件传值，但是不能直接修改父组件传过来的值
*  
* react性能好的原因：使用虚拟dom;减少真是dom的操作[真实dom创建和对比=》很损耗性能]；【虚拟dom就是一个js对象，用它来描述真实dom，损耗了性能；但是数据+模板 生产新的虚拟dom==》极大的提升了性能】[两个js对象比较不怎么损耗性能]
* 1. state 数据
* 2. JSX 模板
* 3. 数据 + 模板 ==》生产虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）（损耗了性能）
* 4. 用虚拟DOM的结构生产真实的DOM，来显示
* 5. 当state发生变化
* 6. 数据+模板 ==》生产新的虚拟DOM（极大的提升了性能）
* 7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别（该过程对比直接真实DOM的对比极大的提升性能）
* 8. 直接操作改变内容
*  有点：1.性能提升了。2.它使得跨端应用得以实现。React Native

## 虚拟DOM的diff算法===》第七步涉及到different算法==》同层比对的算法【快】 虚拟DOM的比对与keys值做关联【因此要保持key值稳定】
* setState===>异步函数设计的初衷是提高底层性能【可以把多次setState结合成一次减少比对次数】。
* 
### react是一个轻量级的视图层框架
### redux是一个数据层框架  Redux = Reducer + Flux

## Redux设计和使用的三项原则：【reducer是个纯函数】
* 1.store必须是唯一的；
* 2.只有store能够改变自己的内容
* 3.reducer是纯函数。
## Redux的核心API
* 1. createStore ==>创建store；
* 2. store.dispatch ==> 派发action传递给store
* 3. store.getState ==> 获取store里所有数据内容
* 4. store.subscribe ==> 帮助订阅store的改变，store改变监听方法触发页面数据更新

## Redux中发送异步请求获取数据
## Redux-thunk中间件进行ajax请求发送 --> Middleware
实际项目中，需要权衡是直接使用Redux还是用React-Redux。
React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）

# UI组件
1. 只负责 UI 的呈现，不带有任何业务逻辑
2. 没有状态（即不使用this.state这个变量）
3. 所有数据都由参数（this.props）提供
4. 不使用任何 Redux 的 API
# 容器组件
1. 负责管理数据和业务逻辑，不负责 UI 的呈现
2. 带有内部状态
3. 使用 Redux 的 API
UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑
# 如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。

# 一般index.js是入口文件；app.js是根组件。

# immutable.js库的意义==》防止在reducer里直接修改state
# 使用 immutable.js生产immutable对象，该对象是不可以改变的。
# if判断多余三个改为switch语句更精简

# PureComponent 底层已经做了  shouldComponentUpdate的性能优化。
# 使用PureComponent应该使用immutable来管理数据，不然会遇到来自底层的坑

# react-loadable用于模块异步加载






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
