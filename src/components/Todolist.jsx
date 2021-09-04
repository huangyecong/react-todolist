// 导入React依赖
import React from 'react'
// 引入样式
import '../assets/Todolist.css'


/**
 * 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
 * 这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，
 * 得到与父类同样的实例属性和方法，然后再对其进行加工，
 * 加上子类自己的实例属性和方法。
 * 如果不调用super方法，子类就得不到this对象。
 */

// 使用Es6的className定义组件
class Todolist extends React.Component {
  /**************************************************** 构造函数 start**********************************************/
  constructor(props) {
    super(props)//调用父类的constructor（props）,一定要放在构造函数第一行，不然后边就用不了this

    this.state = { //this.state 保存初始化数据
      inputValue: React.createRef(),//输入框的值,使用React.createRef创建一个ref实例，将它分配给变量inputValue
      list: [
        {
          title: "吃饭",
          checked: true
        },
        {
          title: "睡觉",
          checked: false
        },
        {
          title: "打豆豆",
          checked: false
        }
      ]
    }
  }

  /************************************************* 这里可以写你自定义的方法 start ****************v***********************/
  // 添加事项
  handleAddTodo = (event) => {
    event.preventDefault()//阻止冒泡，也就是阻止浏览器的默认行为
    if(this.state.inputValue.current.value === ''){
      alert("请输入待办事项")
      return
    }
    let tempList = this.state.list;
    tempList.push({
      title: this.state.inputValue.current.value,//获取input输入框的值
      checked: false
    })

    this.setState({
      list: tempList
    }) // 异步更新,this.setState 会对一个组件的 state 对象安排一次更新。当 state 改变了，该组件就会重新渲染
    this.state.inputValue.current.value = ''
    console.log(this.state.list);
  }

  // 改变事项状态
  checkboxChange = (index) => {
    console.log('index', index);
    let tempList = this.state.list;
    tempList[index].checked = !tempList[index].checked
    this.setState({
      list: tempList
    })
  }

  // 删除事项
  handleDeleteTodo = (index) => {
    let tempList = this.state.list;
    tempList.splice(index, 1)
    this.setState({
      list: tempList
    })
  }

  /********************************************************** 渲染函数 start **********************************************/
  render() {
    return (
      <div className="container">
        <h1>Todolist</h1>
        <form onSubmit={(event) => this.handleAddTodo(event)}>
          <input type="text" className="input_todos" ref={this.state.inputValue}  placeholder="请输入待办事项"/>
          <button className="btn_add">添加</button>
        </form>

        <h2>待办事项：</h2>
        <ul>
          {
            this.state.list.map((value, index) => {
              if (!value.checked) {
                return (
                  <li key={index}>
                    <div className="check_btn">
                      <input type="checkbox" className="checkbox_input" checked={value.checked} onChange={this.checkboxChange.bind(this, index)} />
                      <span>{value.title}</span>
                    </div>
                    <button className="btn_delete" onClick={this.handleDeleteTodo.bind(this, index)}>删除</button>
                  </li>
                )
              }
            })
          }
        </ul>

        <h2>已完成事项：</h2>
        <ul>
          {
            this.state.list.map((value, index) => {
              if (value.checked) {
                return (
                  <li key={index}>
                    <div className="check_btn">
                      <input type="checkbox" className="checkbox_input" checked={value.checked} onChange={this.checkboxChange.bind(this, index)} />
                      <span>{value.title}</span>
                    </div>
                    <button className="btn_delete" onClick={this.handleDeleteTodo.bind(this, index)}>删除</button>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }
}

export default Todolist// 输出组件，使得该组件可以被其他组件调用

/**总结创建React组件的步骤：
 * 1、import导入依赖
 * 2、创建组件（classxxx entends React.component）
 * 3、构造函数constructor
 * 4、渲染render
 * 5、export导出组件
 */

//为了在回调中使用 `this`，这个绑定是必不可少的this.addToDo.bind(this)