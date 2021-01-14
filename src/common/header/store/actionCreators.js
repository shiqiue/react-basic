import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";
// 上面自己本文件使用
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data), //改变数据类型
  totalPage: Math.ceil(data.length / 10)
});

// 下面导出去使用
export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});


export const getList = () => {//使用了redux-thunk可以返回一个函数
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch((error) => {
      console.error(error);
    })
  }
}