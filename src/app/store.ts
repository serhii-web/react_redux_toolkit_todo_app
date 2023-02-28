import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  selectedTodoSlice  from '../features/slices/selectedTodoSlice';
import todosSlice from '../features/slices/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    selectedTodo: selectedTodoSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
