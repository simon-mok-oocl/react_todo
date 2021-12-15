import '../style/item.css';
import { useDispatch } from 'react-redux';
import { DELETE_TODO_ITEM, TOGGLE_DONE } from '../constant/constant';
import { deleteTodo, updatTodo } from '../api/todos';

function Item(props)
{
	const dispatch = useDispatch();

	function toggleDone()
	{
		let patch = {description: props.todo.description , done: !props.todo.description.done};
		let id = props.todo.id;
		updatTodo(id , patch)
			.then(
					dispatch({type: TOGGLE_DONE , payload: props.todo.id }));
	}

	function deleteItem()
	{
		let id = props.todo.id;
		deleteTodo(id)
			.then(
					dispatch({type: DELETE_TODO_ITEM , payload: props.todo.id }));
	}

	let description;

	if(props.todo.done)
		description = <strike>{props.todo.description}</strike>;
	else
		description =  <span>{props.todo.description}</span>  ;

	return <p>  
					<button className="link" onClick={toggleDone}>{ description }</button>
					 <input type="button" value="x" onClick={deleteItem}/>
			</p>;
}

export default Item;
