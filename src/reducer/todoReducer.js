import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { ADD_TODO_ITEM, TOGGLE_DONE } from "../constant/constant";

function todoReducer(state={todoList:[]} , action)
{
    switch(action.type)
    {
        case ADD_TODO_ITEM:
            return {...state , todoList: [...state.todoList , action.payload] };
        case TOGGLE_DONE:
            let allItem = state.todoList;

            let useItem = state.todoList.map(
                function(item , index)
                {
                    if(item.id == action.payload)
                        item.done = ! item.done;

                    return item;
                }

            )

            return {...state , todoList: useItem};
        default:
            return state;
    }
}

export default todoReducer;