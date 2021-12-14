import { ADD_TODO_ITEM } from "../constant/constant";

function todoReducer(state={todoList:[]} , action)
{
    switch(action.type)
    {
        case ADD_TODO_ITEM:
            return {...state , todoList: [...state.todoList , action.payload] };
        default:
            return state;
    }
}

export default todoReducer;