import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from "./store";
// import bannerPic from "./../../statics/banner.png";
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from "./style";

class Login extends PureComponent {
  render() {
    const { isLogin, login } = this.props;
    if(!isLogin){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => {this.account = input}}/>
            <Input placeholder="密码" ref={(input) => {this.password = input}} type="password"/>
            <Button onClick={() => {login(this.account, this.password)}}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      // 从定向
      return <Redirect to='/'/>
    }
  }
};

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(accountEl, passwordEl) {
    console.log(accountEl.value, passwordEl.value)
    dispatch(actionCreators.login(accountEl.value, passwordEl.value))
  }
})

export default connect(mapState, mapDispatch)(Login);