import '../style/item.css';
import { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_DONE } from '../constant/constant';

function Item(props)
{
	// const [id , setId] = useState(0);
	const dispatch = useDispatch();

	function toggleDone()
	{
		dispatch({type: TOGGLE_DONE , payload: props.todo.id });
	}

	let description;
	let crossButton = <input type="button" value="x" onClick={toggleDone}/>;

	if(props.todo.done)
		description = <strike>{props.todo.description}</strike>;
	else
		description =  <span>{props.todo.description}</span>  ;

	return [<p> <button class="link" onClick={toggleDone}>{ description }</button> {crossButton} </p>];
}

export default Item;
