import React, { PureComponent } from "react";
import { connect } from "react-redux";
import avatarPic from "./../../../statics/avatar.png";//多行文本里面嵌变量的方式
import { 
  WriterWrapper,
  WriterTitle,
  WriterSwitch,
  WriterContainer,
  WriterItem
} from "../style";

class Writer extends PureComponent {
  render() {
    const pic = avatarPic;
    const { list } = this.props;
    return (
      // .recommended-authors
      <WriterWrapper>
        <WriterTitle>
          <span className="title">推荐作者</span>
          {/* onClick={() => handleChangePage(page, totalPage, this.spinIcon)}  
          ref={(icon) => {this.spinIcon = icon}} */}
          <WriterSwitch>
            <span className="iconfont">&#xe631;</span>
            换一批
          </WriterSwitch>
        </WriterTitle>
        <WriterContainer>
          {
            list.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <a href={item.get('skipUrl')} className="avatar">
                    <img className="img" src={pic} alt="图片"/>
                  </a>
                  <span className="follow">
                    <span className="icon">+</span> 
                    关注
                  </span>
                  <a href={item.get('skipUrl')} className="name">
                    {item.get('name')}
                  </a>
                  <p className="desc">{item.get('desc')}</p>
                </WriterItem>
              )
            })

          }
          {/* <WriterItem>
            <a href="" className="avatar">
              <img className="img" src={pic} alt="图片"/>
            </a>
            <a className="follow"><span className="icon">+</span> 关注</a>
            <a className="name">琪官Kafka</a>
            <p className="desc">写了257.2k字 · 4.3k喜欢</p>
          </WriterItem> */}
         
        </WriterContainer>
      </WriterWrapper>
    )
  }
};

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])//immutable对象数据获取
});

export default connect(mapState, null)(Writer);