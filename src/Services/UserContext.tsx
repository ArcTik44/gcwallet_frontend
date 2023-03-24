import { createContext, useContext, useState } from "react";
import { IUser } from "./auth";

interface ContextProps{
    isLogged: boolean;
    user: IUser|null;
    userLogin:(data:IUser)=>void;
    userLogout:()=>void;
}


export const UserContext = createContext<ContextProps>({} as ContextProps);

export const UserContextProvider = (props: any) => {
    const [isLogged, setIsLogged] = useState(false);
    const[user,setUser] = useState<IUser|null>(null);

    const userLogin = (data:IUser) => {
        setUser(data);
        setIsLogged(true);  
    }

    const userLogout = () => {
        setUser(null);
        setIsLogged(false);
    }

    return <>
        <UserContext.Provider value={{
            isLogged: isLogged,
            user:user,
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