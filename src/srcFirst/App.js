
import React, { Component, Fragment} from "react";//  Fragment占位符 并不会被编译成标签

class App extends Component {

  render() {
    return (
      <Fragment>
        <div>
          app
        </div>
        
      </Fragment>
    )
  }


}


export default App;
