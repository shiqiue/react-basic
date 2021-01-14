import styled from "styled-components";
import bannerPic from "./../../statics/banner.png";//多行文本里面嵌变量的方式

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    display: block;
    width: 625px;
    height: 270px;
    background: url(${bannerPic});
    background-size: contain;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow:hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
  background: red;
`;

export const WriterWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
`;

export const WriterTitle = styled.div`
  text-align: left;
  .title {
    font-size: 14px;
    color: #969696;
  }
`;

export const WriterSwitch = styled.div`
  float: right;
  display: inline-block;
  font-size: 14px;
  color: #969696;
  .iconfont {
    font-size: inherit;
    margin-right: 4px;
  }
`;

export const WriterContainer = styled.div`
  margin: 0 0 20px;
  text-align: left;
`;

export const WriterItem = styled.div`
  overflow: hidden;
  margin-top: 15px;
  line-height: 20px;
  padding-bottom: 3px;
  .avatar {
    display: block;
    cursor: pointer;
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    color: #333;
  }
  .img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
  }
  .name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    text-decoration: none;
    color: #333;
  }
  .desc {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .follow {
    display: inline-block;
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    .icon{
      font-size: 16px;
    }
  }
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 80px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
`;


