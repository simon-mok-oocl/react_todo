import Input from './input.js'
import Item from './item.js'

function TodoContainer(props)
{
	return(
		<div>
			<Input></Input>
			<Item todo="test"></Item>
		</div>
	);
}

export default TodoContainer;
