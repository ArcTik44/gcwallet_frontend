import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, FormGroup } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { userSignIn } from "../../Services/api-services";
import { UserContext } from "../../Services/UserContext";
import { LoginCred } from "../../Services/auth";

const Login = () =>{
    const {user,userLogin} = useContext(UserContext);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (evt:React.FormEvent<HTMLElement>) =>{
        evt.preventDefault();
        const login: LoginCred ={
            email: email,
            password: password
        };
        
        const res = userSignIn(login);
        if(res==null){
            console.log(res);
        }
        else{
            console.log(res);
            userLogin();
            window.location.href="/";
        }
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
        <div className="logo-container" style={{
            display:'flex',
            justifyContent:'center',
        }}>
        <AccountBalanceWalletIcon/>
        </div>
        
        <h1 style={{fontFamily:'sans-serif'}}>GCWallet</h1>
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