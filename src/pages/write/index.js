import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(isLogin){
      return (
        <div>写页面</div>
      )
    }else {
      // 从定向
      return <Redirect to='/login'/>
    }
  }

};

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'login'])
});


export default connect(mapState, null)(Write);