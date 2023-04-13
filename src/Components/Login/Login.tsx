import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button, FormGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../Services/api-services";
import  {LoginCred}  from "../../Services/auth";
import { UserContext } from "../../Services/UserContext";

const Login = () =>{
    
    const {userLogin} = useContext(UserContext);
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async(evt:React.FormEvent<HTMLElement>) =>{
        evt.preventDefault();
        const login:LoginCred ={
            email: email.trim(),
            password: password
        };
        
        let res = await userSignIn(login);
        
        if(res!=null){
            console.log(res);
            userLogin(res);
            window.sessionStorage.setItem("user",JSON.stringify(res));
            navigate('/');
        }
        else{
            console.log(666);
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
        <div>
        <div className="flex justify-center content-center mt-4 mb-6 space-x-8 items-center">
        <h1 className='text-4xl font-semibold'>GCWallet</h1>
        <div className='scale-150'>
            <AccountBalanceWalletIcon/>
        </div>
        </div>
        
        <FormGroup>
            <div className='max-w-xl self-center mb-8'>
            <TextField name="email" label="Email" variant="outlined" onChange={handleChange} value={email} type="email"/>
            </div>
            <div className='max-w-xl self-center mb-8'>
            <TextField name="password" label="Password" variant="outlined" onChange={handleChange} value ={password} type='password'/>
            </div>

            <div className='max-w-xl self-center'>
            <Button className="login_button" onClick={handleSubmit}>Login</Button>
            </div>
            <div className='max-w-lg cursor-pointer rounded mt-4 self-center bg-slate-200' onClick={()=>{navigate("/register")}}>No account yet?</div>
        </FormGroup>
        </div>
    );
}
export default Login;