import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import  { actionCreators } from './store'
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem,
  SearchWrapper, 
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from "./style"; //HeaderWrapper就是一个带样式的div标签

const getListArea = (show) => {
  if(show){
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        {/* 热搜词 */}
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null;
  }
}

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span 
            className={props.focused ? 'iconfont focused' : 'iconfont'}
          >&#xe614;</span>
          {/* 热门搜索 */}
          {getListArea(props.focused)}

        </SearchWrapper>
      </Nav>
      {/* 附加的功能 */}
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe676;</span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}
// store里state数据映射到无状态组建的props里
// get('focused')//immutable语法
const mapStateToProps = (state) => {//state是个immutable对象
  // state.get('header').get('focused') === state.getIn(['header', 'focused'])
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

//  方法操作映射Props借由dispatch修改store里数据
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      // const action = {
      //   type: 'search_focus'
      // }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      // const action = {
      //   type: 'search_blur'
      // }
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header); 