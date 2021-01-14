import React, { PureComponent} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import  { actionCreators } from './store'
import  { actionCreators as loginActionCreators} from './../../pages/login/store'
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

class Header extends PureComponent {

  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props; //解构赋值
    const  newList = list.toJS(); //toJS方法，把immutable数组转化成js数组
    const  pageList = [];

    if(newList.length){
      for (let i = (page - 1)*10; i < page * 10; i++) {
        if(newList[i]){
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if(focused || mouseIn){
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe631;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          {/* 热搜词 */}
          <SearchInfoList>
            {/* this.props.list是immutable数组，该数组也提供map方法 */}
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, list, isLogin, handleInputFocus, handleInputBlur, logout } = this.props; 
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            isLogin ? 
            <NavItem onClick={logout} className="right">退出</NavItem> : 
            <Link to='/login'><NavItem className="right"> 登录</NavItem></Link>
          }
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span 
              className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}
            >&#xe614;</span>
            {/* 热门搜索 */}
            {this.getListArea(focused)}
  
          </SearchWrapper>
        </Nav>
        {/* 附加的功能 */}
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <span className="iconfont">&#xe676;</span>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

}


// store里state数据映射到无状态组建的props里
// get('focused')//immutable语法
const mapStateToProps = (state) => {//state是个immutable对象
  // state.get('header').get('focused') === state.getIn(['header', 'focused'])
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    isLogin:  state.getIn(['login', 'login'])
  }
};

//  方法操作映射Props借由dispatch修改store里数据
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size===0 && dispatch(actionCreators.getList());//获取热搜词具体数据
      dispatch(actionCreators.searchFocus());//控制搜索框样式和热搜词的框是否显示
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {//鼠标移入
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {//鼠标离开
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {//点击换一换
      
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if(page < totalPage){
        dispatch(actionCreators.changePage(++page));
      }else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header); 