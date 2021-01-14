// 项目的入口文件
import React, {Fragment} from 'react'; // JSX语法一定要使用react
import ReactDOM from 'react-dom';


import App from './App';
import { Globalstyle } from './style'
import { Globaliconfont } from './statics/iconfont/iconfont' //全局图标
console.log('Globalstyle', Globalstyle)

// 使用react严格模式会报错
ReactDOM.render(
  <Fragment>
    <Globalstyle/>
    <Globaliconfont/>
    <App />
  </Fragment>
  ,
  document.getElementById('root')
);