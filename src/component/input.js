import { useRef } from 'react';
import '../style/input.css';

function Input(props)
{
	const todoTextRef = useRef(null);

	function handleNewItem()
	{
		props.addTodoItem(todoTextRef.current.value)
	}

	return(
		<div>
			<input ref={ todoTextRef } type='text'></input>
			<input type='submit' onClick={ handleNewItem } value='Add Item'></input>
		</div>
	);
}

export default Input;
