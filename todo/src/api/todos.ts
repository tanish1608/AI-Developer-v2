import axios from "axios";

const api = axios.create({
baseURL: "/api",
});

export const getTodos = async () => {
try {
const response = await api.get("/todos");
return response.data;
} catch (error) {
console.error(error);
return [];
}
};

export const addTodo = async (todo: TodoItem) => {
try {
const response = await api.post("/todos", todo);
return response.data;
} catch (error) {
console.error(error);
return null;
}
};

export const deleteTodo = async (id: string) => {
try {
await api.delete(`/todos/${id}`);
} catch (error) {
console.error(error);
}
};