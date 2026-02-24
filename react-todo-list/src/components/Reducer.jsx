import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, initialState);

export default function reducer(state, action){
    if(action.type ==="delete"){
      console.log("Deleted")
    }else if(action.type ==="save"){
      console.log("Saved")
    }else if(action.type ==="add"){
      returnconsole.log("Added")
    }
    return state;
}


