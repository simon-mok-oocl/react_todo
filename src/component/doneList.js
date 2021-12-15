import { useSelector } from 'react-redux';

function DoneList() {
    const todoList = useSelector(state => state.todoList);

    console.log(todoList);

    return (
        todoList.filter((item) => item.done)
        .map(
            (item) => <p>{item.description}</p>
        )
    );
}

export default DoneList;
