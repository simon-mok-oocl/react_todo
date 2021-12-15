import '../style/item.css';
import { useDispatch } from 'react-redux';
import { DELETE_TODO_ITEM, TOGGLE_DONE } from '../constant/constant';

function Item(props)
{
	const dispatch = useDispatch();

	function toggleDone()
	{
		dispatch({type: TOGGLE_DONE , payload: props.todo.id });
	}

	function deleteItem()
	{
		dispatch({type: DELETE_TODO_ITEM , payload: props.todo.id });
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
