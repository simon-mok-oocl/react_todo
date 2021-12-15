import { useSelector } from 'react-redux';

function DoneList() {
    const todoList = useSelector(state => state.todoList);

    console.log(todoList);

    return (
        todoList.filter((item) => item.done)
        .map(
            (item) => <h1 key={item.id}>{item.description}</h1>
        )
    );
}

export default DoneList;
