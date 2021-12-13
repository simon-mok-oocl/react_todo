import Item from './item.js'
import { useState , useEffect } from 'react'

function ItemContainer(props)
{
	const [toRender , setToRender] = useState([]);

	useEffect( () => { 
				console.log("todo list changed!!!");
				setToRender(props.todoList);
			} 
		, [props.noItems]);

	return toRender.map(item => <li>{item}</li>)

	//const reptiles = ["alligator", "snake", "lizard"];
  	//return reptiles.map((reptile) => <li>{reptile}</li>);
}

export default ItemContainer
