import { useState } from 'react'
import initialState from './information/Data.jsx'
import TodoItem from './components/TodoItem.jsx'
import { useReducer } from 'react';
import AddTask from './components/TodoItem.jsx'
let firstItem = 0;//This tracks what todo item
// is,  it's the first item in the list
let number = 0;
let uniqueId = -1 // GOES DOEN ON PURPOSE
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
      let upperParentItem = document.getElementById(`${firstItem}`).parentElement.parentElement;
      let firstInitialItem = upperParentItem.firstChild.nextSibling.nextSibling;
      let lastInitialItem = upperParentItem.lastChild.previousSibling.previousSibling.previousSibling
      let editBttn = document.createElement("button");
      editBttn.innerText = "Edit";
      editBttn.onclick = function(){
        // Able to properly add the edit button to the correct location, make sure
        // to append the delete button AFTER this
        console.log("Edit clicked!")
      }
      //Delete button logic below
      let deleteBttn = document.createElement("button");
      deleteBttn.innerText = "Delete";
      deleteBttn.onclick = function(){
        // Delete Button Logic here
        console.log("Delete clicked!")
        deleteBttn.previousElementSibling.previousElementSibling.innerHTML = "MISSING";
        //deleteBttn.parentElement.innerHTML = "MISSING";
        
      
      }
      console.log("Before:", upperParentItem.children)
      const li = document.createElement("li");
      li.innerHTML = `
                    <li>
                    <label>
                    <input type="checkbox" name="completed" defaultChecked/>
                    </label>
                    <span className = "todoItem">
                    test
                    </span>
                    
                    
                    </li>`
      console.log(li.querySelector(".edit-btn"))
      uniqueId-=1;
      
      firstInitialItem.appendChild(li);
      firstInitialItem.appendChild(editBttn); // This is manually adding the 
      // add button. Need to add
      firstInitialItem.appendChild(deleteBttn);
      number+=1;
      console.log("After:", upperParentItem.children)
      


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
         <span className = "todoItem"></span>
         {/*This empyu span list is here so the added item is able to be placed before the actual current item*/}
        {initialState.map((item, index)=>  
          <span className="item" key={index}>
            <TodoItem item = {item} counter={index}/>

          </span>
          
        )}
        <input type="checkbox" name="completed"/>
        <input type="text" name="change-item" placeholder="Add Interactivity"/>
        <button className = "save-btn" onClick={()=> dispatch({type: "save"})}>Save</button>
      </ul>
      {/*console.log(document.getElementById(`${firstItem}`).parentElement.parentElement.childElementCount)*/}
      {/* Subtract this number from 5 to get the total amount of todo items - RANDOMLY BREAKS
      first item starts at 0 initially.*/}
      
    </>
  )
}




export default App
