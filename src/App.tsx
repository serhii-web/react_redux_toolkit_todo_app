import React from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';
import SelectedTodo from './components/SelectedTodo/SelectedTodo';
import Todos from './components/Todos/Todos';
import { selectedTodo } from './features/slices/selectedTodoSlice';

function App() {
  const selected = useAppSelector(selectedTodo)

  return (
    <div className="App">
      <AddNewTodo />
      <Todos />
      {selected && <SelectedTodo {...selected} />}
    </div>
  );
}

export default App;
