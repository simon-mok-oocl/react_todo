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

	if(props.todo.done)
		return <p><strike>{props.todo.description}</strike>  <input type="button" value="x" onClick={toggleDone}/> </p>;
	else
		return <p>{props.todo.description} <input type="button" value="x" onClick={toggleDone}/></p>;
}

export default Item;
