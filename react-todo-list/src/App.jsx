import { useState } from 'react'
import initialState from './information/Data.jsx'
import TodoItem from './components/TodoItem.jsx'
function App() {


  return (
    <>
      <ul>
        <input type="text" name="add-task" placeholder="Add Task"/>
        <button class = "add-btn">Add</button>
        {initialState.map((item, index)=>  
          <span className="item" key={index}>
            <TodoItem item = {item}/>

          </span>
          
        )}
        <input type="checkbox" name="completed"/>
        <input type="text" name="change-item" placeholder="Text to change Item"/>
        <button class = "save-btn">Save</button>
      </ul>

    </>
  )
}




export default App
