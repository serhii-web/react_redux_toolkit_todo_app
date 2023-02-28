import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TodoState } from '../types';

const initialState: TodoState[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    togleStatus: (state, action: PayloadAction<number>) => {
      return state.map(todo => ({...todo, status: todo.id === action.payload ? !todo.status : todo.status}));
    },
  },
});

export const { add, togleStatus } = todosSlice.actions;
export const selectCount = (state: RootState) => state.todos;

export default todosSlice.reducer;
