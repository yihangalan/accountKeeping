import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "./authContext";


interface AuthContextValue {
    isPopupOpen: boolean;
    setPopupOpen: (value: boolean) => void;
    getDataByMonth: (month: number) => void;
}

export const PopupContext = createContext<AuthContextValue>(null as unknown as AuthContextValue);

export const PopupContextProvider = ({ children }: { children: React.ReactNode }) => {
    const backend_url = "http://localhost:3000/api";
    const [isPopupOpen, setPopupOpen] = useState(false);
    const {currentUser} = useContext(AuthContext)

    const getDataByMonth = async (month) => {
        const value = {
            month: month,
            year: new Date().getFullYear(),
            uid: currentUser.id
        }
        const res = await axios.get(backend_url + "/post/getPostsByMonth", {params: value})
        for (let i = 0; i < res.data.length; i++) {
            res.data[i].date = new Date(res.data[i].date).getDate()
        }
        return res.data;
    }



    return (
        <PopupContext.Provider value={{isPopupOpen, setPopupOpen, getDataByMonth}} >
            {children}
        </PopupContext.Provider>
    );
};
