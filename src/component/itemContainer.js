import Item from './item.js'
import { useState , useEffect } from 'react'

function ItemContainer(props)
{
	// const [toRender , setToRender] = useState([]);

	// useEffect( () => { 
	// 			console.log(props.todoList);
	// 		} 
	// 	, [props.todoList]);

	return props.todoList.map( (item , index )=> <Item key={ index } todo={item}></Item>)
	//return <div></div>;

}

export default ItemContainer
