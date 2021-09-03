import React from 'react'
import '../assets/Todolist.css'

class Todolist extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div class="container">
        <h1>Todolist</h1>
        
        <input type="text" class="input_todos"/>
        <button class="btn_add">添加</button>
        
        <h2>待办事项：</h2>
        <ul>
          <li>
           <div class="check_btn">
           <input type="checkbox" class="checkbox_input" />
           <span>111</span>
           </div>
            <button class="btn_delete">删除</button>
          </li>
        </ul>

        <h2>已完成事项：</h2>
        <ul>
          <li>
          <div class="check_btn">
           <input type="checkbox" class="checkbox_input" />
            <span>222</span>
           </div>
          <button class="btn_delete">删除</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Todolist