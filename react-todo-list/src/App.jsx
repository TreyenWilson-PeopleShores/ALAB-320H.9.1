import { useState } from 'react'
import initialState from './information/Data.jsx'
import TodoItem from './components/TodoItem.jsx'
function App() {


  return (
    <>
      <ul>
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
