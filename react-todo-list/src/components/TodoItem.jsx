

function TodoItem(props){


    if(props.item.completed === true){
        return(
            <>
                
                <li>
                    <label>
                    <input type="checkbox" name="completed" value="completed"/>
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
                    NEEDS COMPLETED
                    <label>
                    <input type="checkbox" name="completed" value="completed"/>
                    </label>
                    {props.item.title}
                    <button class = "edit-btn">Edit</button>
                    <button class = "delete-btn">Delete</button>
                </li>


            </>
        )      
    }
}


export default TodoItem