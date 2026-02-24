import { useState } from 'react'
import initialState from './information/Data.jsx'
import TodoItem from './components/TodoItem.jsx'
import { useReducer } from 'react';


function App() {

    let [value, setValue] = useState("test")
    // Added so the screen updates

  return (
    <>
      <ul>
        <input type="text" name="add-task" placeholder="Add Task"/>
        <button className = "add-btn" onClick={()=> setValue()}>Add</button>
        {initialState.map((item, index)=>  
          <span className="item" key={index}>
            <TodoItem item = {item} counter={index}/>

          </span>
          
        )}
        <input type="checkbox" name="completed"/>
        <input type="text" name="change-item" placeholder="Text to change Item"/>
        <button className = "save-btn" onClick={()=> setValue()}>Save</button>
        <p>value</p>
      </ul>
      {console.log(document.getElementById("1"))}
    </>
  )
}




export default App
