import Item from './Item.js'

function ItemContainer(props)
{

	return props.todoList.map( (item)=> <Item key={ item.id } todo={item}></Item>)

}

export default ItemContainer
