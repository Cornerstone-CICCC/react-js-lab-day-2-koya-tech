import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useUser } from "./UserContext";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isLoggedIn } = useUser();
    return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
}

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/todos"
                        element={
                            <ProtectedRoute>
                                <TodoPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
