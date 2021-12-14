import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_DONE } from "../constant/constant";

function todoReducer(state={todoList:[]} , action)
{
    let useItem;

    switch(action.type)
    {
        case ADD_TODO_ITEM:
            return {...state , todoList: [...state.todoList , action.payload] };
        case TOGGLE_DONE:
            useItem = state.todoList.map(
                function(item , index)
                {
                    if(item.id === action.payload)
                        item.done = ! item.done;

                    return item;
                }

            )

            return {...state , todoList: useItem};
        case DELETE_TODO_ITEM:
            useItem = state.todoList.filter(
                function(item , index)
                {
                    if(item.id !== action.payload)
                        return true;
                    return false;
                }

            )
            return {...state , todoList: useItem};
        default:
            return state;
    }
}

export default todoReducer;