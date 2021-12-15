import Input from './input.js'
import ItemContainer from './itemContainer.js'

import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import api from '../api/todos.js';
import { INIT_TODO } from '../constant/constant.js';
import axios from 'axios';

function TodoContainer()
{

	const todos = useSelector(state => state.todoList);
	const dispatch = useDispatch();

	useEffect( () => {
		//api.get("/todos").then( (response) => console.log(response.data));
		api.get("/todos").then( (response) => dispatch( {type: INIT_TODO , payload: response.data}) );
	});


	return(
		<div>
			<ItemContainer todoList={ todos } ></ItemContainer>
			<Input></Input>
		</div>
	);
}

export default TodoContainer;
