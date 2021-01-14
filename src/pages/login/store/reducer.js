// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import * as actionTypes from './actionTypes'

// immutable库
// immutable对象
const defaultState = fromJS({
  login: false
});

// immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.value);
    case actionTypes.LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
}
export default reducer;