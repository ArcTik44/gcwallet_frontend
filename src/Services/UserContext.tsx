import React,{ createContext, useState } from "react";
import { IUser } from "./auth";

interface UserContextType {
    user: IUser;
    isLogged:boolean;
    updateUser: (newUser: IUser) => void;
  }
interface MyComponentProps{
    child:React.ReactNode
}

export const UserContext = React.createContext<UserContextType>({
    user: { username: '', email: '', password: '', _id: '', cards: [''] },
    isLogged: false,
    updateUser: (newUser:IUser)=>{}
});

export const UserProvider:React.FC<MyComponentProps> = ({child}) =>{
    const [user,setUser] = useState<IUser>({username:'',email:'',password:'',_id:'',cards:['']});
    const [isLogged,setIsLogged] = useState(false);
    const updateUser = (newUser:IUser ) =>{
        setUser(newUser);
    }

    return(
        <UserContext.Provider value={{user,updateUser,isLogged}}>
            {child}
        </UserContext.Provider>
    )
}