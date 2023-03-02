import { useState } from "react";
import AddToDo from './AddToDo/AddToDo';
import './App.css';
import ShowToDo from './ShowToDo/ShowToDo';

type todo = { task: string, date: string, prio: number }; //put in aniother file  namining convention is capital

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  const remove = (r: number) => {
    let removed: todo[] = [...todos];
    removed.splice(r, 1);
    setTodos(removed)
  }

  return (
    <div className="App">
      <header className="App-header">Todo App</header>
      <AddToDo addTodo={todo => setTodos([...todos, todo])} />
      <ShowToDo todos={todos} remove={remove} />
    </div>
  );
}

export default App;
