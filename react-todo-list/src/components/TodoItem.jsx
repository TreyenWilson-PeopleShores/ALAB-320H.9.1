import { useReducer } from 'react';
import initialState from '../information/Data.jsx'


export function AddTask(){
    return(
    <>
    <input type="text" name="add-task" placeholder="Add Task"/>
    <button className = "add-btn" onClick={()=> dispatch({type: "add",})}>Add</button>
    <span className = "todoItem"></span>
    </>
    )
}

export function TodoItem(props){





function reducer(state, action){
    let actions = {
        TOGGLE:{
            ...state,
            activeID: action.payload
        }
    }
    if(action.type ==="delete"){
      document.getElementById(action.payload).parentElement.innerHTML=""
      
    }else if(action.type ==="edit"){
        
            //console.log("Edit");
            let input = window.prompt("Edit your task below:");
            document.getElementById(action.payload).firstChild.nextSibling.textContent=`${input}`

    } else if(action.type == "click"){
        //console.log("Clicked");
        let listItem = document.getElementById(action.payload);
        let deleteBttn = listItem.querySelector(".delete-btn")
        if(action.isChecked === true){
          deleteBttn.disabled = false;
        }else if(action.isChecked === false) {
          deleteBttn.disabled = true;
        }
    }
    return state;
  }
const [state, dispatch] = useReducer(reducer, initialState);


    if(props.item.completed === true){
        return(
            <>
                <li id={props.counter}>
                    <label>
                    <input type="checkbox" name="completed" defaultChecked onChange={(e)=> dispatch({type: "click", payload: props.counter, isChecked: e.target.checked})}/>
                    </label>
                    <span className = "todoItem">
                    {props.item.title}
                    </span>
                    <button className = "edit-btn" onClick={(e)=> dispatch({type: "edit", payload: e.currentTarget.parentElement.id})}>Edit</button>
                    <button className = "delete-btn" onClick={(e)=> dispatch({type: "delete", payload: e.currentTarget.parentElement.id})}>Delete</button>
                </li>

            </>
        )      
    } else if(props.item.completed === false){
        return(
            <>
                <li id={props.counter}>
                    <label>
                    <input type="checkbox" name="completed" onChange={(e)=> dispatch({type: "click", payload: props.counter, isChecked: e.target.checked})}/>
                    </label>
                    {props.item.title}
                    <button className = "edit-btn" onClick={(e)=> dispatch({type: "edit", payload: e.currentTarget.parentElement.id})}>Edit</button>
                    <button className = "delete-btn" onClick={(e)=> dispatch({type: "delete", payload: e.currentTarget.parentElement.id})} disabled>Delete</button>
                </li>


            </>
        )      
    }
}


export default TodoItem