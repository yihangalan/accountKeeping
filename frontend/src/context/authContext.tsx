import { createContext, useEffect, useState } from "react";
import axios from "axios";

interface AuthContextValue {
    currentUser: unknown;
    login: (inputs: any) => Promise<void>;
    logout: (inputs: any) => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const backend_url = "http://localhost:3000/api";
    const [currentUser, setCurrentUser] = useState<unknown>(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs: any) => {
        const res = await axios.post(backend_url + "/auth/login", inputs);
        setCurrentUser(res.data);
    };

    const logout = async (inputs: any) => {
        await axios.post(backend_url + "/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
