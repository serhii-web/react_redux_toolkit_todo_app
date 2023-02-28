export interface NewTodo {
  title: string;
  description: string;
}

export interface TodoState extends NewTodo {
  id: number;
  status: boolean;
}

export type InitialState = TodoState | null;
