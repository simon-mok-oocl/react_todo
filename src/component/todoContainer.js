import Input from './input.js'
import ItemContainer from './itemContainer.js'

import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { INIT_TODO } from '../constant/constant.js';
import { getTodo } from '../api/todos.js'

function TodoContainer()
{

	const todos = useSelector(state => state.todoList);
	const dispatch = useDispatch();



	return(
		<div>
			<ItemContainer todoList={ todos } ></ItemContainer>
			<Input></Input>
		</div>
	);
}

export default TodoContainer;
