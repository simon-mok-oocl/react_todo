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

	return toRender.map(item => <Item todo={item}></Item>)

}

export default ItemContainer
