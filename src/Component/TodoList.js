import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList(){

    const [todos,setTodos] = useState([]);

    // addTodo function
    const addTodo = (todo)=>{

        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo,...todos];
        setTodos(newTodos);
        //console.log(todo,...todos);
    }


    const updateTodo = (todoId, newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        
        setTodos(prev=> prev.map(item=>(item.id === todoId ? newValue :item)));
    }

    // remove todo from list function

    const removeTodo = id =>{

        const removeArr = [...todos].filter(todo=> todo.id!== id);
        setTodos(removeArr);
    }


    const completeTodo = id=>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return(
        <>
            <h1>What is plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo} 
            updateTodo={updateTodo}
            />
        </>
    )
}