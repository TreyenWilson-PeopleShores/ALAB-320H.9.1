import { useState } from 'react'
import initialState from './information/Data.jsx'
import TodoItem from './components/TodoItem.jsx'
function App() {


  return (
    <>
      <ul>
        <input type="text" name="text" placeholder="text"/>
        <button class = "add-btn">Add</button>
        {initialState.map((item, index)=>  
          <span className="item" key={index}>
            <TodoItem item = {item}/>

          </span>
        )}
      </ul>

    </>
  )
}




export default App
