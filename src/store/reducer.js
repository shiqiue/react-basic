import { combineReducers } from "redux-immutable"; //生产的是个immutable对象
import { reducer as headerReducer } from "../common/header/store"; //as ES6语法起个别名
import { reducer as homeReducer } from "../pages/home/store"; 
import { reducer as detailReducer } from "../pages/detail/store"; 
import { reducer as loginReducer } from "../pages/login/store"; 
// redux-immutable

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});

export default reducer;