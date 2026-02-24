

function TodoItem(props){
    return(
        <>
            <li><b>Todo: </b>{props.item.title}</li>
            <label>
            <input type="checkbox" name="completed" value="completed"/> Completed
            </label>
            <button class = "delete-btn" onclick="deleteItem(this)">Delete</button>
        </>
    )
}


export default TodoItem