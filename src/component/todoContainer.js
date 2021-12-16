import InputForm from './InputForm.js'
import ItemContainer from './ItemContainer.js'

import {  useSelector} from 'react-redux';

function TodoContainer()
{

	const todos = useSelector(state => state.todoList);



	return(
		<div>
			<ItemContainer todoList={ todos } ></ItemContainer>
			<InputForm></InputForm>
		</div>
	);
}

export default TodoContainer;
