import { addToDo } from "../api/todos";
import { ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_DONE  , UPDATE_TODO_DESCRIPTION} from "../constant/constant";
import { INIT_TODO } from "../constant/constant";

function todoReducer(state={todoList:[]} , action)
{
    let useItem;

    switch(action.type)
    {
        case INIT_TODO:
            return {...state , todoList: action.payload};
        case ADD_TODO_ITEM:
            return {...state , todoList: [...state.todoList , action.payload] };
        case TOGGLE_DONE:
            useItem = state.todoList.map(
                function(item )
                {
                    if(item.id === action.payload.id)
                        item.done = ! item.done;

                    return item;
                }

            )

            return {...state , todoList: useItem};
        case DELETE_TODO_ITEM:
            useItem = state.todoList.filter(
                function(item )
                {
                    return item.id !== action.payload.id;
                }

            )
            return {...state , todoList: useItem};
        case UPDATE_TODO_DESCRIPTION:
            useItem = state.todoList.map(
                function(item)
                {
                    if(item.id === action.payload.id)
                        {
                            item.description = action.payload.description;
                        }
                    return item;
                }
            )

            return {...state , todoList: useItem};
        default:
            return state;
    }
}

export default todoReducer;