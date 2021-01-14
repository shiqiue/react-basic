import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
// import axios from "axios";
// 一般先引入组件 再引入样式

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      list:[]
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleTtemDelete = this.handleTtemDelete.bind(this);
  }

  render() {
    console.log('父组件')
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          {/* 获取DOM节点的方式ref使用  ref={(input) => {this.input = input}}*/}
          <input 
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
           this.getTodoItem() 
          }
        </ul>
      </Fragment>
    )
  }

  // 使用Charles进行接口数据模拟
  //  axios 请求放在该钩子函数
  // componentDidMount() {
  //   axios('/api/todolist').then(()=>{
  //     alert('scss')
  //   }).catch((error)=>{
  //     alert('error')
  //   })
  // }

  getTodoItem() {
   return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={index}
          content={item} 
          index={index}
          deleteTtem={this.handleTtemDelete}
        />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    // setState的第二个参数是回调函数
    this.setState(() => ({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    }), () => {
      console.log('回调函数')
    });
  }

  handleTtemDelete(index) {
    // react里的概念===》immutable
    // state 不允许我们做任何的改变
    this.setState((prevState) => {
      const list = [...prevState.list];//copy一份list
      list.splice(index, 1);
      return {
        list
      }
    });
  }
}

export default TodoList