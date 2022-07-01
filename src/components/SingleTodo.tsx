import React, { useEffect, useRef, useState } from 'react'
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import TodoList from './TodoList';

//you can use both interface or type here. In interface we don't write = equal sign.

type Props = {
    todo: Todo;   //the model created(Todo).
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {


    const [ edit , setEdit ] = useState<boolean>(false);
    const [editTodo, seteditTodo] = useState<string>(todo.todo);


    const handleDone = (id: number) => {
        setTodos (
            todos.map((todo) =>
              todo.id === id ? {...todo, isDone: !todo.isDone} : todo
           )
        );
     };


     //to delete note.
     const handleDelete =  (id: number) => {
             setTodos(todos.filter((todo) => todo.id ! == id))
    };

     const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todos) => (
            todo.id === id? {...todo, todo: editTodo} : todo
        )))
        setEdit(false);
     };

     const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
         inputRef.current?.focus();
        }, [edit])
     


  return (
    <form className = "todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>

        {
            edit ? (
                <input className = "todos_single--text" 
                 ref={inputRef}
                 value={editTodo} 
                 onChange={ (e)=> seteditTodo(e.target.value)} 
                 />
            ):(
                 todo.isDone? (
                 <s className = "todos_single--text"> { todo.todo } </s> //s-strike.
                ) : (
                 <span className = "todos_single--text"> { todo.todo } </span>
                )
            )
        }

        

       

        <div>
            <span className="icon"
                onClick={() => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit)
                }}
            }>
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo;