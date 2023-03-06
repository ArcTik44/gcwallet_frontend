import React, { useState } from "react";
import '../Login/styles';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Login = () =>{
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (evt:React.FormEvent<HTMLElement>) =>{
        evt.preventDefault();
    }
    
    const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = evt.target;
        switch (name){
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    }

    return (
        <>
        <div className="login_page">
        <AccountBalanceWalletIcon/>
        <div className="login_form">
            <TextField id="email" label="Email" variant="outlined" onChange={handleChange} value={email}/>
            <TextField id="password" label="Password" variant="outlined" onChange={handleChange} value ={password}/>
            <Button className="login_button" onClick={handleSubmit}>Login</Button>
        </div>
        </div>
        </>
    );
}
export default Login;