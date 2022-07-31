import React,{useState} from 'react'

import '../App.css';
const Todo_form = (props) => {
    const[input, setInput]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            value:input

        });
        
        setInput('');
    }
    
    const handleChange=(e)=>{
        setInput(e.target.value)
        
    }
    
    
  return (
        <div className='form'>
        <form   action="" onSubmit={submitHandler} >
            <div className='todo_form'>
        <input className='todo_input' type='text' name='todo_item' value={input} placeholder='Type a todo' onChange={handleChange}>

        </input>
     <button className='todo_button' type='submit'>Add To do</button>
     </div>
    
    </form>
    </div>
  )
}

export default Todo_form