import '../style/item.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { DELETE_TODO_ITEM, TOGGLE_DONE, UPDATE_TODO_DESCRIPTION } from '../constant/constant';
import { deleteTodo, updatTodo } from '../api/todos';

import { Button } from 'antd';
import { Modal } from 'antd';
import { Input } from 'antd';

function Item(props) {
	const dispatch = useDispatch();
	const [editModalVisible, setEditmodalVisible] = useState(false);
	const [newTodoDescripton, setNewTodoDescription] = useState();

	function toggleDone() {
		let patch = { description: props.todo.description, done: !props.todo.done };
		let id = props.todo.id;
		updatTodo(id, patch)
			.then((response) => (
				dispatch({ type: TOGGLE_DONE, payload: response.data })));
	}

	function deleteItem() {
		let id = props.todo.id;
		deleteTodo(id)
			.then((response) => (
				dispatch({ type: DELETE_TODO_ITEM, payload: response.data })));
	}

	function editTodoDescription() {
		let id = props.todo.id;

		updatTodo(id, { description: newTodoDescripton })
			.then((response) => (
				dispatch({ type: UPDATE_TODO_DESCRIPTION, payload: response.data })
			));
	}

	function showEditPopup() {
		setEditmodalVisible(true);
	}

	function hideEditPopup() {
		setEditmodalVisible(false);
	}

	function handleEdit() {
		editTodoDescription();
		setEditmodalVisible(false);
	}

	function getNewDescription(event) {
		setNewTodoDescription(event.target.value);
	}

	let description;

	if (props.todo.done)
		description = <strike>{props.todo.description}</strike>;
	else
		description = <span>{props.todo.description}</span>;

	return (
	<div className="item-display-group">
		<button className="link" onClick={toggleDone}>{description}</button>

		<div className="item-button-group">
			<Button type="link" onClick={showEditPopup}>Edit</Button>
			<span> | </span>
			<Button type="link" onClick={deleteItem}>Delete</Button>
		</div>

		<Modal title="Edit Todo" visible={editModalVisible} onOk={handleEdit} onCancel={hideEditPopup}>
			<Input onChange={getNewDescription}></Input>
		</Modal>
	</div>
	);
}

export default Item;
