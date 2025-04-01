import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) 
        || null);

    const login = () => {
        //To DO
        setCurrentUser({
            id: 1,
            name: "Thomas Kim",
            profilePic: "/youtube2022/src/assets/DINO.png",});
    }; 

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};