import api from './api'

export const getTodo = () =>
{
    return api.get("/todos");
}

export const addToDo = (newTodo) =>
{
    return api.post("/todos" , newTodo);
}

export const updatTodo = (id , todoPatch) =>
{
    return api.put("/todos/" + id , todoPatch);
}

export const deleteTodo = (id) =>
{
    return api.delete("/todos/" + id );
}