import React from "react"; // { Component }
import { Input, Button, List} from 'antd'
// UI组件==傻瓜组件-->负责渲染
// class TodoListUI extends Component {
//   render() {
//     console.log('props',this.props);
//     return (
//       <div>
//         <div>
//           <Input 
//             value={this.props.inputValue} 
//             placeholder="Todo Info" 
//             style={{width:'300px', marginRight:'10px'}}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         {/* onClick={this.props.handleItemDelete(index) 不能直接这样写==方法直接执行了 */}
//         <List
//           style={{width:'300px', marginTop:'10px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         >
//         </List>
//       </div>
//     )
//   }
// }

// 无状态组件就是一个函数===>当一个组件只有一个render函数时，可以改成无状态组件。
const  TodoListUI = (props) => {
  console.log('props',props);
  return (
    <div>
      <div>
        <Input 
          value={props.inputValue} 
          placeholder="Todo Info" 
          style={{width:'300px', marginRight:'10px'}}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      {/* onClick={props.handleItemDelete(index) 不能直接这样写==方法直接执行了 */}
      <List
        style={{width:'300px', marginTop:'10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      >
      </List>
    </div>
  )
}

export default TodoListUI;
