import { createContext, useContext, useState, type ReactNode } from "react";

interface UserContextType {
    name: string;
    isLoggedIn: boolean;
    login: (name: string) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("useUser must be used within UserProvider");
    return ctx;
}

export function UserProvider({ children }: { children: ReactNode }) {
    const [name, setName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (userName: string) => {
        setName(userName);
        setIsLoggedIn(true);
    };
    const logout = () => {
        setName("");
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{ name, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
