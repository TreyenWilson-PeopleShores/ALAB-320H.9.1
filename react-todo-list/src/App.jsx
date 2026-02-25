import { useState } from 'react'
import initialState from './information/Data.jsx'
import TodoItem from './components/TodoItem.jsx'
import { useReducer } from 'react';

  function reducer(state, action){
    if(action.type ==="delete"){
      console.log("Deleted")
    }else if(action.type ==="save"){
      console.log("Saved")
    }else if(action.type ==="add"){
      console.log("Added")
    }
    return state;
  }


function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    let [value, setValue] = useState("test")
    // Added so the screen updates

  return (
    <>
      <ul>
        <input type="text" name="add-task" placeholder="Add Task"/>
        <button className = "add-btn" onClick={()=> dispatch({type: "add"})}>Add</button>
        {initialState.map((item, index)=>  
          <span className="item" key={index}>
            <TodoItem item = {item} counter={index}/>

          </span>
          
        )}
        <input type="checkbox" name="completed"/>
        <input type="text" name="change-item" placeholder="Add Interactivity"/>
        <button className = "save-btn" onClick={()=> dispatch({type: "save"})}>Save</button>
      </ul>
      {console.log(document.getElementById("1"))}
    </>
  )
}




export default App
