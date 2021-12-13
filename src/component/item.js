import '../style/item.css';

function Item(props)
{
	return(
		<div>
			<p>{ props.todo }</p>
		</div>
	);
}

export default Item;
