import React, { Component } from "react";
// PropTypes 与 DefaultProps 概念的学习
import PropTypes from "prop-types"; //脚手架自带

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
  }

  render() {
    const { content, test } = this.props;
    return (
      <div onClick={this.handelClick}>
        {test} -- {content}
      </div>
    )
  }
  // 子组件如何调用父组件的方法 来修改父组件里的内容
  // [只需要把父组件的方法传给子组件]
  handelClick(){
    const { deleteTtem, index } = this.props;
    deleteTtem(index);
  }
 
  // 当一个组件从父组件接受了参数
  // 只要父组件的render函数被执行了，子组件的这个生命周期函数就是会被执行
  // 即：如果这个组件第一次存在于父组件中，不会执行；
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }
  
  // 当这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }
 
}

// 限制要求父组件传值的类型 不符合 给出警告提示
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,//必须传递
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),//PropTypes.string,
  deleteTtem: PropTypes.func,
  index: PropTypes.number
}

// 默认值设置
TodoItem.defaultProps = {
  test: 'Hello word'
}

export default TodoItem