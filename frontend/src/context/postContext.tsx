import { createContext, useEffect, useState } from "react";
import axios from "axios";


interface AuthContextValue {
    isPopupOpen: boolean;
    setPopupOpen: (value: boolean) => void;
}

export const PopupContext = createContext<AuthContextValue>(null as unknown as AuthContextValue);

export const PopupContextProvider = ({ children }: { children: React.ReactNode }) => {
    const backend_url = "http://localhost:3000/api";
    const [isPopupOpen, setPopupOpen] = useState(false);



    return (
        <PopupContext.Provider value={{isPopupOpen, setPopupOpen}} >
            {children}
        </PopupContext.Provider>
    );
};
