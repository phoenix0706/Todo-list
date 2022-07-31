import React,{useState} from 'react'
import Todo_form from './Todo_form'
import Todo from './Todo';

import '../App.css';
const Todo_list = () => {
    const [todo,setTodo]=useState([])
    const todohandler=(newtodo)=>{
        if (!newtodo.value || /^\s*$/.test(newtodo.value)){
            return;
        }
        setTodo((prevstate)=>{
            return [newtodo,...prevstate]

        })
   
    

    }
    const deleteTodo=(id)=>{
        const new_list=[...todo].filter(item=>item.id!==id);
        setTodo(new_list)
    }
  return (
    <>    
    <h1 className='heading'>What's Your Plan For Today!</h1>
    <Todo_form onSubmit={todohandler}/>
    <Todo todo={todo} deleteTodo={deleteTodo}></Todo>
    </>

  )
}

export default Todo_list