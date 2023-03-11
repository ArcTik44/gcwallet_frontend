import { useState } from "react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
const Register = () =>{
    
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [confirmPassword,setConfirmPassword] = useState<string>('');
    const [username,setUsername] = useState<string>('');
    const [tosAccepted,setTos] = useState<boolean>(false);

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
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            case "tos":
                setTos(evt.target.checked);
                break;
        }
    }

    const createAccount = () =>{
        
    }

    return(
        <FormGroup>
        <AccountBalanceWalletIcon/>
        <h1>GCWallet</h1>
        <TextField name="username" variant="outlined" helperText='This will be displayed on your page' label="Username" value={username}
        onChange={handleChange} type="text" />
        <TextField onChange={handleChange} name="email" variant="outlined" label="Email" value={email} type="email" />
        <TextField onChange={handleChange} name="password" variant="outlined" label="Password" value={password} type="password" />
        <TextField onChange={handleChange} name="confirmPassword" variant="outlined" label="Confirm password" value={confirmPassword} type="password" />
        <FormControlLabel control={<Checkbox name="tos" value={tosAccepted} onChange={handleChange}/>} label="ToS GCWallet" />
        <Button onClick={createAccount}>Create account</Button>
        <div style={{
                backgroundColor:'white',
                cursor:'pointer'
            }}
        onClick={()=>{window.location.href='/login'}}>Already have account?</div>
        </FormGroup>
    )
}
export default Register;