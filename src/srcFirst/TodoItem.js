import React, { Component } from "react";
// PropTypes 与 DefaultProps 概念的学习
import PropTypes from "prop-types"; //脚手架自带

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
  }

  // shouldComponentUpdate使用==>提高render组件性能
  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.content !== this.props.content){
      return true;
    }else {
      return false;
    }
  }

  render() {
    console.log('子组件')
    const { content } = this.props;
    return (
      <div onClick={this.handelClick}>
       {content}
      </div>
    )
  }
  
  // 子组件如何调用父组件的方法 来修改父组件里的内容
  // [只需要把父组件的方法传给子组件]
  handelClick(){
    const { deleteTtem, index } = this.props;
    deleteTtem(index);
  }

 
}

// 限制要求父组件传值的类型 不符合 给出警告提示
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),//PropTypes.string,
  deleteTtem: PropTypes.func,
  index: PropTypes.number
}


export default TodoItem