

function TodoItem(props){


    if(props.item.completed === true){
        return(
            <>
                
                <li>
                    <label>
                    <input type="checkbox" name="completed" checked/>
                    </label>
                    {props.item.title}
                    <button class = "edit-btn">Edit</button>
                    <button class = "delete-btn">Delete</button>
                </li>


            </>
        )      
    } else if(props.item.completed === false){
        return(
            <>
                
                <li>
                    <label>
                    <input type="checkbox" name="completed"/>
                    </label>
                    {props.item.title}
                    <button class = "edit-btn">Edit</button>
                    <button class = "delete-btn" disabled>Delete</button>
                </li>


            </>
        )      
    }
}


export default TodoItem