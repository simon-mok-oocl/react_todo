import Input from './input.js'
import ItemContainer from './itemContainer.js'

import { useSelector} from 'react-redux';

function TodoContainer()
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
