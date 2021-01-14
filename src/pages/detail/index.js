import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { actionCreators } from "./store";
import bannerPic from "./../../statics/banner.png";
import { 
  DetailWrapper, 
  Header,
  Content 
} from "./style";

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{ title }</Header>
        <Content>
          <img src={bannerPic} alt='图片'/>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        </Content>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    console.log('-----',this.props.match.params.id)
    this.props.getDetail(this.props.match.params.id)
  }
};

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDtail(id))
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));