import { createContext, useContext, useState } from "react";
import { IUser } from "./auth";

let user:IUser ={
    _id: "",
    username: "",
    email: "",
    password: "",
    cards: []
};

export const UserContext = createContext({
    isLogged: false,
    user,
    userLogin: () => {},
    userLogout: () => {},
})

export const UserContextProvider = (props: any) => {
    const [isLogged, setIsLogged] = useState(false);
    
    const userLogin = () => {
        setIsLogged(true);  
    }

    const userLogout = () => {
        setIsLogged(false);
    }

    return <>
        <UserContext.Provider value={{
            isLogged: isLogged,
            user,
            userLogin,
            userLogout
        }}>
            {props.children}
        </UserContext.Provider>
    </>
}
export const useUserContext = () => {
    return useContext(UserContext);
}