import TodoWrapper from "@/components/TodoWrapper";

export default function DashboardPage() {
  // Define a default list of todos
  const defaultTodos = [
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Finish homework" },
    
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Todo List</h1>
     
      <TodoWrapper todos={defaultTodos} />
    </div>
  );
}
