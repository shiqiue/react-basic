import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";

class Home extends PureComponent {

  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <span className='banner-img'></span>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight> 
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  
  handleScrollTop = () => {
    window.scrollTo(0, 0);
  }
  
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
};

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    }else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);