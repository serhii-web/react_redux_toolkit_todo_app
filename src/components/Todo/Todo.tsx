import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { set } from "../../features/slices/selectedTodoSlice";
import { togleStatus } from "../../features/slices/todosSlice";
import { TodoState } from "../../features/types";

const Todo:FC<TodoState> = ({ id, title, description, status}) => {
  const shortingDescription = description.slice(0, 20) + '...';
  const dispatch = useAppDispatch();

  return (
    <li
      key={id}
      style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        cursor: 'pointer'
      }}
      onClick={() => dispatch(set({id, title, description, status}))}
    >
      <span>{id}</span>
      <span>{title}</span>
      <span>{shortingDescription}</span>
      <input
        type='checkbox'
        checked={status}
        onChange={() => dispatch(togleStatus(id))}/>
    </li>
  )
}

export default Todo