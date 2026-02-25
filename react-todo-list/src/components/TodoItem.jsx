import { useReducer } from 'react';
import initialState from '../information/Data.jsx'




function TodoItem(props){

function reducer(state, action){
    let actions = {
        TOGGLE:{
            ...state,
            activeID: action.payload
        }
    }
    let number = 1;
    if(action.type ==="delete"){
      document.getElementById(action.payload).innerHTML="DELETED"
      
    }else if(action.type ==="edit"){
        if (number === 1){
            console.log("Edit");
            let input = window.prompt("Edit your task below:");
            document.getElementById(action.payload).innerHTML=`${input}`
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
                    <input type="checkbox" name="completed" defaultChecked/>
                    </label>
                    {props.item.title}
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
                    <input type="checkbox" name="completed"/>
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