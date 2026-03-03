import { useEffect, useState } from "react";

const Home = () => {
  const [todo, setTodo] = useState("");      // Input for new todo
  const [todos, setTodos] = useState([]);    // List of todos

  // Fetch all todos from backend
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/todo/");
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!todo.trim()) return; // prevent empty todos

    try {
      await fetch("http://localhost:4000/api/todo/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: todo }),
      });
      setTodo("");     // Clear input
      fetchTodos();    // Refresh list
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/todo/delete/${id}`, {
        method: "DELETE",
      });
      fetchTodos();  // Refresh list
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">Todo App</h1>

      <form className="mt-8 flex" onSubmit={addTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-96 p-3 rounded-sm bg-gray-600 border"
          placeholder="Enter new todo..."
        />
        <button
          className="w-24 border bg-blue-500 rounded-sm p-3 ml-2"
          type="submit"
        >
          Add
        </button>
      </form>

      <div className="mt-8 w-full flex flex-col items-center">
        {todos.map((item) => (
          <div
            key={item._id}
            className="flex items-center mt-3 w-full justify-center"
          >
            <p className="bg-gray-900 rounded-sm w-96 p-3">{item.text}</p>
          
            <button
              className="bg-red-500 p-3 ml-3 rounded-sm"
              onClick={() => deleteTodo(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
