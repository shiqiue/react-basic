
import React, { Component, Fragment} from "react";//  Fragment占位符 并不会被编译成标签
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './style.css'

class MultiElAnimation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.handleToggole = this.handleToggole.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* 多元素动画 */}
        <TransitionGroup>
        {
          this.state.list.map((item, index) => {
            return (
              <CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEnter={(el) => {el.style.color='blue'}}
                appear={true}
              >
                <div key={index}>{item}</div>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
        
        <button onClick={this.handleToggole}>add item</button>
      </Fragment>
    )
  }

  handleToggole() {
    this.setState((prevState) => ({
      list:[...prevState.list,'item']
    }))
  }

}


export default MultiElAnimation;
