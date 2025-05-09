import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

export default function LoginPage() {
    const [input, setInput] = useState("");
    const { login } = useUser();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            login(input.trim());
            navigate("/todos");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <form
                onSubmit={handleLogin}
                className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col items-center"
            >
                <h2 className="text-2xl font-bold mb-4 text-white">
                    Hi. What's your name?
                </h2>
                <input
                    className="mb-4 px-4 py-2 rounded w-72 bg-gray-700 text-white focus:outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your name"
                />
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
