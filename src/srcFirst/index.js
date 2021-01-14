// 项目的入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList';
import MultiElAnimation from './animation/MultiElAnimation'
import SingleAnimation from './animation/SingleAnimation'
import ReduxLearn from './redux/index'
import TodoList1 from './reactRedux/TodoList'
// JSX语法一定要使用react

ReactDOM.render(
  <React.StrictMode>
   <div style={{padding:'20px'}}>
    <App />
    <div>
      <TodoList1/>
    </div>
    <div>
      <ReduxLearn/>
    </div>
    <div>
      <h1>todolist</h1>
      <TodoList/>
    </div>
    <div>
      <h1>单元素动画</h1>
      <SingleAnimation/>
    </div>
    <div>
      <h1>多元素动画</h1>
      <MultiElAnimation/>
    </div>
   </div>
  </React.StrictMode>,
  document.getElementById('root')
);