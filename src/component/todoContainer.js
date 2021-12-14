import Input from './input.js'
import ItemContainer from './itemContainer.js'

import { useState } from 'react'
import { useSelector} from 'react-redux';

function TodoContainer(props)
{

	const todos = useSelector(state => state.todoList);


	return(
		<div>
			<ItemContainer todoList={ todos } ></ItemContainer>
			<Input></Input>
		</div>
	);
}

export default TodoContainer;
