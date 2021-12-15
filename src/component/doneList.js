import { useSelector } from 'react-redux';

function DoneList() {
    const todoList = useSelector(state => state.todoList);

    console.log(todoList);

    return (
        todoList.filter((item) => item.done)
        .map(
            (item) => <p key={item.id}>{item.description}</p>
        )
    );
}

export default DoneList;
