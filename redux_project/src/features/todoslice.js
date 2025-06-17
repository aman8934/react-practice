import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{id:1,text:""}]
}
const todoslice =createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addtodo : (state,action) => {
        const todo={
            id:nanoid(),
            text:action.payload
        }
        state.todos.push(todo)   //state update from initial state
        },
        removetodo : (state,action) => {
            state.todos=state.todos.filter( (todo) => todo.id!== action.payload)
        },
        editTodo : (state,action) => {
            const {id , newText} =action.payload
            state.todos = state.todos.map(todo =>
             todo.id === id ? { ...todo, text: newText } : todo)
  

        }
}
}
)

export const {addtodo , removetodo} = todoslice.actions

export default todoslice.reducer