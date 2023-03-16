import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, FormGroup } from "@mui/material";
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
        <h1>GCWallet</h1>
        <FormGroup>
            <TextField name="email" label="Email" variant="outlined" onChange={handleChange} value={email} type="email"/>
            <TextField name="password" label="Password" variant="outlined" onChange={handleChange} value ={password} type='password'/>
            <Button className="login_button" onClick={handleSubmit}>Login</Button>
            <div style={{
                backgroundColor:'white',
                cursor:'pointer'
            }} onClick={()=>{window.location.href='/register'}}>No account yet?</div>
        </FormGroup>
        </div>
        </>
    );
}
export default Login;