import '../style/item.css';

function Item(props)
{
	// return(
	// 	<div>

	// 		<p>{ props.todo.description }</p>
	// 	</div>
	// );

	if(props.todo.done)
		return <p><strike>{props.todo.description}</strike></p>;
	else
		return <p>{props.todo.description}</p>;
}

export default Item;
