import { useDispatch } from 'react-redux';
import { useState } from 'react';
import '../style/input.css';

import {ADD_TODO_ITEM} from '../constant/constant.js'

import { addToDo } from '../api/todos';

import { Button } from 'antd';
import { Input } from 'antd';

function InputForm() {
	const dispatch = useDispatch();
	const [inputText , setInputText] = useState();

	function handleNewItem() {
		addToDo({ description: inputText, done: false })
			.then((response) => dispatch({ type: ADD_TODO_ITEM, payload: response.data }));
	}

	function updateInputText(event) {
		setInputText(event.target.value);
	}

	return(
		<div>
			<Input onChange={updateInputText}></Input>
			<Button type="primary" onClick={ handleNewItem } >Add Item</Button>
		</div>
	);
}

export default InputForm;
