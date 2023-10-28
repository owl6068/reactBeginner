import { useState } from 'react';
import BtnStyle from './css/module/Button.module.scss'
function ToDoList(){
  const [toDo, setTodo] = useState('')
  const [list, setList] = useState([]);
  const addTodoList = (event) =>  setTodo(event.target.value)
  const onSubmit = (event) => {
    console.log('asdf')
    event.preventDefault()
    if(toDo === ''){
      return
    }
    setList(value => {return [toDo, ...value]})
    setTodo('')
  }
  
  return(
    <div className='Todo__wrap'>
      <h1>Todo List ({list.length})</h1><br/>
      <form onSubmit={onSubmit}>
        <div style={{display:'flex',alignItems:'center'}}>
          <input value={toDo} type='text' onChange={addTodoList}/><button className={BtnStyle.btn}>확인</button>
        </div>
      </form>
      <ul>
        {list.map((data,i) =><li key={i}>{data}</li>)}
      </ul>
    </div>
  )
}

export default ToDoList;