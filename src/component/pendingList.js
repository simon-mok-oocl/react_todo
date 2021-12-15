import { useSelector } from 'react-redux';

function PendingList() {
    const todoList = useSelector(state => state.todoList);

    console.log(todoList);

    return (
        todoList.filter((item) => !item.done)
        .map(
            (item) => <h1 key={item.key}>{item.description}</h1>
        )
    );
}

export default PendingList;
