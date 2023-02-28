import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import { add } from '../../features/slices/todosSlice'
import { NewTodo } from "../../features/types";

const AddNewTodo: FC = () => {
  const [todo, setTodo] = useState<NewTodo>({
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const addNewTodo = () => {
    const newTodo = {...todo, status: false, id: Math.round(Math.random() + +new Date())}
    dispatch(add(newTodo))
    setTodo({
      title: "",
      description: "",
    })
  }

  const checkValid = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputs: string[] = Object.keys(todo).filter(key => !todo[key as keyof NewTodo].trim());
    setErrors(inputs)

  };

  const handleFocus = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    if (errors.includes(name)) {
      setErrors(prev => prev.filter(el => el !== name))
    }
  }

  const setColor = (name: string): string => {
    return errors.includes(name) ? 'red' : ''
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!errors.length) {
      addNewTodo()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          style={{borderColor: setColor('title')}}
          name="title"
          value={todo.title}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={checkValid}
        />
        {errors.includes('title') && <span
          style={{color: 'red'}}
        >
          This field is empty
        </span>}
      </div>
      <div>
        <input
          type="text"
          name="description"
          style={{borderColor: setColor('description')}}
          value={todo.description}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={checkValid}
        />
        {errors.includes('description') && <span
          style={{color: 'red'}}
        >
          This field is empty
        </span>}
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddNewTodo;
