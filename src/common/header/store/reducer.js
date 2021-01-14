import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

// immutable库
// immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1, //每次展示十个热搜词
  totalPage: 1
});

// immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        'list': action.data,
        'totalPage': action.totalPage
      }); //state.set('list', action.data).set('totalPage', action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);   
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);   
    default:
      return state;
  }
}
export default reducer;