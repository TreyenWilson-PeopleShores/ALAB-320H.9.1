import { useState } from 'react'
import initialState from './information/Data.jsx'
import TodoItem from './components/TodoItem.jsx'
import { useReducer } from 'react';

let firstItem = 0;//This tracks what todo item
// is,  it's the first item in the list
  function reducer(state, action){
        let actions = {
        TOGGLE:{
            ...state,
            activeID: action.payload
        }
    }
   if(action.type ==="save"){
      console.log("Saved")

    }else if(action.type ==="add"){
      console.log("Added")
      let originalFirstItem = document.querySelector("li");
      originalFirstItem.firstElementChild.innerHTML = `${originalFirstItem.innerHTML} <br><input type="checkbox" name="completed"/>`//<li>>2${originalFirstItem.innerHTML}</li>`
      //firstItem-=1;
      
     
    }
    return state;
  }


function App() {
     //This tracks what todo item
    // is first
    const [state, dispatch] = useReducer(reducer, initialState);
    let [value, setValue] = useState("test")
    // Added so the screen updates

  return (
    <>
      <ul>
        <input type="text" name="add-task" placeholder="Add Task"/>
        <button className = "add-btn" onClick={()=> dispatch({type: "add",})}>Add</button>
        {initialState.map((item, index)=>  
          <span className="item" key={index}>
            <TodoItem item = {item} counter={index}/>

          </span>
          
        )}
        <input type="checkbox" name="completed"/>
        <input type="text" name="change-item" placeholder="Add Interactivity"/>
        <button className = "save-btn" onClick={()=> dispatch({type: "save"})}>Save</button>
      </ul>
      {console.log(document.getElementById(`${firstItem}`))}
    </>
  )
}




export default App
