import { FC } from "react"
import { useAppDispatch } from "../../app/hooks"
import { remove } from "../../features/slices/selectedTodoSlice";
import { TodoState } from "../../features/types"

const SelectedTodo: FC<TodoState> = ({ id, title, description }) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(remove())
  }

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'grey',
        opacity: .7
      }}
      onClick={handleClose}
    >
      <div 
        style={{backgroundColor: 'white', opacity: 1}}
      >
        <h1>{title}</h1>
      <p>{id}</p>
      <p>{description}</p>
      <button onClick={handleClose}>x</button>
      </div>
    </div>
  )
}

export default SelectedTodo