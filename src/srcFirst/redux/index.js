// redux的学习
import React, { Component } from "react";
import 'antd/dist/antd.css';

import store from './../store'
import { getInputCahngeAction, getAddItemAction, getDeleteItemAction } from "./../store/actionCreators";
// import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from "./../store/actionTypes";
import TodoListUI from "./TodoListUI";
import axios from "axios";

// const data = ['dszdfz ssds ddsdfas dasea fff1.','dszdfz ssds ddsdfas dasea fff2.','dszdfz ssds ddsdfas dasea fff3.']
class ReduxLearn extends Component {
  // 容器组件==聪明组件[业务逻辑-->负责功能实现]
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);//订阅，当store里值改变后触发
    console.log('subscribe', store)
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    axios.get('/list.json').then(res=>{
      console.log('res',res)
    }).catch(err=>{
      console.error('error',err)
    })
  }

  // 改变input的value
  handleInputChange(e) {
    const action = getInputCahngeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
    alert(index)
  }
}

export default ReduxLearn;