

function TodoItem(props){


    if(props.item.completed === true){
        return(
            <>
                
                <li id={props.counter}>
                    <label>
                    <input type="checkbox" name="completed" defaultChecked/>
                    </label>
                    {props.item.title}
                    <button className = "edit-btn">Edit</button>
                    <button className = "delete-btn">Delete</button>
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
                    <button className = "edit-btn">Edit</button>
                    <button className = "delete-btn" disabled>Delete</button>
                </li>


            </>
        )      
    }
}


export default TodoItem