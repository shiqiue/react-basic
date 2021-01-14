// 项目的入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// PWA progressive web application 像写网页那样写App
// https协议的服务器上 缓存网页
// import reportWebVitals from './reportWebVitals';
// JSX语法一定要使用react

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <h1>App</h1>
      <ul>
        {/* <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li> */}
      </ul>
      {props.children}
    </div>
  )
}
// function App() {
//   return (
//     <div className="App">
//       hello word
//     </div>
//   );
// }
const About = () => {
  return <h3>About</h3>
}

const Inbox = (props) => {
  return (
    <div>
      <h2>Inbox</h2>
      {props.children || "Welcome to your Inbox"}
    </div>
  )
}

const Message = (props) => {
  return <h3>Message {props.params.id}</h3>
}

// ReactDOM.render(
//   ( <React.StrictMode>
//     <BrowserRouter>
//       <Route path="/" component={App}>
//         <Route path="about" component={About} />
//         <Route path="inbox" component={Inbox}>
//           <Route path="messages/:id" component={Message} />
//         </Route>
//       </Route>
//     </BrowserRouter> 
//   </React.StrictMode>
// ), document.getElementById('root'))
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

