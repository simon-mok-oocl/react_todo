import Input from './input.js'
import Item from './item.js'
import ItemContainer from './itemContainer.js'

import { useState } from 'react'

function TodoContainer(props)
{
	const [todos , setTodos] = useState([]);
	const [noItems , setNoItems] = useState(0);

	function addTodoItem(item)
	{
		let newList = todos;
		newList.push(item);
		setTodos(newList);

		setNoItems(noItems + 1);

		console.log(noItems + " todo items: " + todos);
	}

	return(
		<div>
			<ItemContainer noItems={ noItems } todoList={ todos } ></ItemContainer>
			<Input addTodoItem={ addTodoItem }></Input>
		</div>
	);
}

export default TodoContainer;
