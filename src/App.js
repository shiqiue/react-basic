
import React, { PureComponent, Fragment} from "react";//  Fragment占位符 并不会被编译成标签
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import Write from "./pages/write";
import Login from "./pages/login";
import store from "./store";

class App extends PureComponent {

  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    )
  }

};

export default App;
