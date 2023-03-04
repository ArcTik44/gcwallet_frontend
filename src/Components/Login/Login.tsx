import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


const Login = () =>{
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

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
        <Box
        sx={{
            width:600,
            height:800,
            backgroundColor:'#454545'
        }}>
            <TextField id="email" label="Email" variant="outlined" onChange={handleChange} value={email}/>
            <TextField id="password" label="Password" variant="outlined" onChange={handleChange} value ={password}/>
            <Button onClick={handleSubmit}/>
        </Box>
    );
}
export default Login;