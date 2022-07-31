import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri';
import '../App.css';

const Todo = (props) => {
  return (
    <>
        {props.todo.map((item)=>(
         <div className='item' key={item.id}>
             <span>{item.value}</span>
            <RiCloseCircleLine className='icon' onClick={()=>props.deleteTodo(item.id)}></RiCloseCircleLine>
          </div>)
          )
        }
    </>
  )
}

export default Todo