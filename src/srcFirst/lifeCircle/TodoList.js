import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
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

  // 在组件即将被挂载到页面的时刻自动执行
  componentWillMount(){
    console.log('componentWillMount')
  }

  render() {
    console.log('render')
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

  // 组件被挂载到页面之后，自动被执行
  componentDidMount(){
    console.log('componentDidMount')
  }

  // 组件被更新之前，他会自动被执行 来决定组件是否需要被更新 true更新 false不更新
  shouldComponentUpdate() { //返回Boolean值
    console.log('shouldComponentUpdate')
    return true;
  }

  // 组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后
  // 如果shouldComponentUpdate返回true它才执行
  // 如果返回false，这个函数就不会被执行了
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  // 组件更新完成之后执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }


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
    // this.input == e.target //[尽量不适应ref]
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
    // 同步设置
    // this.setState({
    //   inputValue: e.target.value
    // })
    // console.log(e.target.value,this)
  }

  handleBtnClick() {
    // setState的第二个参数是回调函数
    this.setState(() => ({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    }), () => {
      console.log('回调函数')
    });
    // this.setState({
    //   list:[...this.state.list, this.state.inputValue],
    //   inputValue:''
    // })
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
    // console.log('index',index)
  }
}

export default TodoList