
import './App.css';
import { db } from './firebase';
import { uid } from 'uid';
import {set,ref,onValue,remove} from 'firebase/database'
import { useState,useEffect } from 'react';
function App() {
  const[todo,setTodo]=useState("")
  const[todos,setTodos]=useState([])
  const handleChange=(e)=>{
setTodo(e.target.value)
  }
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  const add=()=>{
const uuid=uid()
    set(ref(db,`/${uuid}`),{
      uuid,
      todo,
     

    });
    setTodo("")
    console.log("add:", todo)
  }
  const handleDelete=(todo)=>{
    remove(ref(db,`${todo.uuid}`))
  }
  
  return (
    <div className="App">
      <input type='text' value={todo} onChange={handleChange}/>
      <button onClick={add}>Submit</button>
      {todos.map((todo) => (
        <>
          <h1>{todo.todo}</h1>
          <button >update</button>
          <button onClick={()=>{handleDelete(todo)}}>delete</button>
        </>
      ))}
    </div>
  );
}

export default App;
