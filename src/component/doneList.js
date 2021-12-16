import { useSelector } from 'react-redux';

function DoneList() {
    const todoList = useSelector(state => state.todoList);


    if (todoList.filter((item => item.done)).length === 0) {
        return <h1>No Done item</h1>
    }
    else {

        return (
            todoList.filter((item) => item.done)
                .map(
                    (item) => <h1 key={item.id}>{item.description}</h1>
                )
        );
    }
}

export default DoneList;
