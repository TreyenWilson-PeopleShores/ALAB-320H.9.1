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
    if(action.type ==="delete"){
      document.getElementById(action.payload).innerHTML="DELETED"
      
    }else if(action.type ==="edit"){
      console.log("Edit")
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
                    <button className = "edit-btn" onClick={()=> dispatch({type: "edit"})}>Edit</button>
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
                    <button className = "edit-btn" onClick={()=> dispatch({type: "edit"})}>Edit</button>
                    <button className = "delete-btn" onClick={()=> dispatch({type: "delete"})} disabled>Delete</button>
                </li>


            </>
        )      
    }
}


export default TodoItem