import { useSelector } from 'react-redux';

function PendingList() {
    const todoList = useSelector(state => state.todoList);


    if (todoList.filter((item) => !item.done).length === 0) {
        return <h1>No pending item</h1>
    }
    else {

        return (
            todoList.filter((item) => !item.done)
                .map(
                    (item) => <h1 key={item.key}>{item.description}</h1>
                )
        );
    }
}

export default PendingList;
