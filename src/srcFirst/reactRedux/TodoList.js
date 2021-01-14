import React, { Component } from 'react'
import store from "./store";

class TodoList1 extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div>
        <div>
          <input/>
          <button>提交</button>
        </div>
        <ul>
          
        </ul>
      </div>
    )
  }

}
export default TodoList1