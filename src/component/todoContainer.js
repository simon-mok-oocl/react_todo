import Input from './input.js'
import Item from './item.js'

import { useState } from 'react'

function TodoContainer(props)
{
	const [todos , setTodos] = useState([]);

	function addTodoItem(item)
	{
		let newList = todos;
		newList.push(item);
		setTodos(newList);
		console.log("all todo items: " + todos);
	}

	return(
		<div>
			<Input addTodoItem={ addTodoItem }></Input>
			<Item todo="test"></Item>
		</div>
	);
}

export default TodoContainer;
