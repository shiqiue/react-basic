import { CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from "./actionTypes";

const defaultState = {
  inputValue:'',
  list:[]
};

// reducer 可以接收state，但是绝不能改变state
// 纯函数指的是，给固定的输入，就一定会有固定的输出，而且不会有任何副作用
const reducer = (state = defaultState, action) => {
  console.log('reducer', state, action)
  if(action.type === CHANG_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if(action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state
}
export default reducer;