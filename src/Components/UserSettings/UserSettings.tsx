import { Button, FormGroup, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { userUpdate } from "../../Services/api-services";
import { UpdateCred } from "../../Services/auth";
import { UserContext } from "../../Services/UserContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const UserSettings = () =>{

    const {user} = useContext(UserContext);
    const[username,setUsername] = useState<string|null>(null);
    const[email,setEmail] = useState<string|null>(null)
    const[password,setPassword] = useState<string>("");
    const[confirmPassword,setConfirmPassword] = useState<string>(""); 

    const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = evt.target;
        switch (name){
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "username":
                setUsername(value);
                break;
            case "confirm_password":
                setConfirmPassword(value);
                break;
        }
    }

    const updateDetails = async() =>{
        const updated:UpdateCred = {
            username: null,
            email: null,
            password: null
        };
        userUpdate(updated);
    };

    const cancelUpdate = () =>{

    }

    return(
    <>
    <Header username={user?.username}/>
    <FormGroup>
    <TextField name="username" label="Username" variant="outlined" onChange={handleChange} value={username} type='text'/>
    <TextField name="email" label="Email" variant="outlined" onChange={handleChange} value={email} type='email'/>
    <TextField name="password" label="Password" variant="outlined" onChange={handleChange} value={password} type='password'/>
    <TextField name="confirm_password" label="Confirm password" variant="outlined" onChange={handleChange} value={confirmPassword} type='password'/>
    <Button onClick={updateDetails}>Confirm</Button>
    <Button onClick={cancelUpdate}>Cancel</Button>
    </FormGroup>
    <Footer/>
    </>)
}

export default UserSettings;