import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { v4 as uuidv4 } from "uuid";

interface Todo {
    id: string;
    text: string;
}

export default function TodoPage() {
    const { name, logout } = useUser();
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            setTodos([...todos, { id: uuidv4(), text: input.trim() }]);
            setInput("");
        }
    };

    const handleDelete = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
                <div className="flex w-full justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">
                        Welcome, {name}!
                    </h2>
                    <button
                        onClick={handleLogout}
                        className="bg-black text-white px-4 py-1 rounded hover:bg-gray-700 transition"
                    >
                        Log out
                    </button>
                </div>
                <p className="mb-4 text-white">
                    Have a great and productive day!
                </p>
                <div className="w-full mb-4">
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="flex justify-between items-center bg-gray-700 rounded px-4 py-2 mb-2"
                        >
                            <span className="text-white">{todo.text}</span>
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleAdd} className="flex w-full">
                    <input
                        className="flex-1 px-4 py-2 rounded-l bg-gray-700 text-white focus:outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter a new task..."
                    />
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded-r hover:bg-gray-700 transition"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
}
