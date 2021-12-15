import Item from './Item.js'

function ItemContainer(props)
{

	return props.todoList.map( (item , index )=> <Item key={ item.id } todo={item}></Item>)

}

export default ItemContainer
