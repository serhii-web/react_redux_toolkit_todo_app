import { useAppSelector } from "../../app/hooks";
import { selectCount } from "../../features/slices/todosSlice";
import Todo from "../Todo/Todo";

const Todos = () => {
  const todos = useAppSelector(selectCount)
  console.log(todos);
  return (
    <ul>
      {todos?.map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  )
}

export default Todos