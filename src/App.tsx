import React, { useState } from 'react';
import './App.css';
import InputField from "./components/InputField";
import TodoList from './components/TodoList';
import { Todo } from "./components/model";


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);   //array with type or interface in TS.
 

  const handleAdd = (e : React.FormEvent) => { //event type in react typescript.
    e.preventDefault();


    if(todo) {
    setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
    setTodo(""); //after we type it to clear it.
  }
};
 
  console.log(todos);

  return (
    <div className="App">
       <span className="heading">Taskify</span> 
       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
       <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
