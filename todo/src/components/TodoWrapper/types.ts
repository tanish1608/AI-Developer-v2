export interface TodoItem {
id: string;
title: string;
completed: boolean;
}

export interface TodoListProps {
todos: TodoItem[];
setTodos: (todos: TodoItem[]) => void;
}