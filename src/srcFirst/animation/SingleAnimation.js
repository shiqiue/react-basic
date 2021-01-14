
import React, { Component, Fragment} from "react";//  Fragment占位符 并不会被编译成标签
import { CSSTransition } from "react-transition-group";
import './style.css'

class SingleAnimation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggole = this.handleToggole.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>
          hello word
        </div>
        {/* 单元素的动画效果；in表示什么时候增加动画 */}
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEnter={(el) => {el.style.color='blue'}}
          appear={true}
        >
          {/* el==>内部div */}
          <div>hello word2</div>
        </CSSTransition>
        <button onClick={this.handleToggole}>toggle</button>
      </Fragment>
    )
  }

  handleToggole() {
    this.setState(() => ({
      show:!this.state.show
    }))
  }

}


export default SingleAnimation;
