import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { InitialState, TodoState } from '../types';

const initialState = null as InitialState;

export const selectedTodoSlice = createSlice({
  name: 'selectedTodo',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<TodoState>) => action.payload,
    remove: () => null,
  },
});

export const { set, remove } = selectedTodoSlice.actions;
export const selectedTodo = (state: RootState) => state.selectedTodo;

export default selectedTodoSlice.reducer;
