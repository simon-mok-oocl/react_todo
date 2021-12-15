import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import '../style/input.css';

import {ADD_TODO_ITEM} from '../constant/constant.js'
import { addToDo } from '../api/todos';

function Input(props)
{
	const todoTextRef = useRef(null);
	const dispatch = useDispatch();

	function handleNewItem()
	{
		//props.addTodoItem(todoTextRef.current.value)
		//dispatch({type: ADD_TODO_ITEM , payload: {id: uuidv4() , description: todoTextRef.current.value , done: false}});
		addToDo({description: todoTextRef.current.value , done: false})
			.then( (response) => dispatch({type: ADD_TODO_ITEM , payload: response.data }));
	}

	return(
		<div>
			<input ref={ todoTextRef } type='text'></input>
			<input type='submit' onClick={ handleNewItem } value='Add Item'></input>
		</div>
	);
}

export default Input;
