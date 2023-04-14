import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSingUp } from "../../Services/api-services";
import { UserContext } from "../../Services/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [tosAccepted, setTos] = useState<boolean>(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    switch (name) {
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
  };

  const createAccount = async (evt: React.FormEvent<HTMLElement>) => {
    evt.preventDefault();
    if (confirmPassword === password && tosAccepted === true) {
      const res = await userSingUp({
        username: username,
        email: email,
        password: password,
      });

      if (res != null) {
        userLogin(res);
        console.log(res);
        navigate("/");
      } else {
        console.log(res);
      }
    }
  };

  return (
    <FormGroup>
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        mt:'1rem',
        mb:'1.5rem'
      }} className="space-x-8">
        <Typography variant='h3'>GCWallet</Typography>
        <Box sx={{
          scale:'150%'
        }}>
        <AccountBalanceWalletIcon />
        </Box>
      </Box>

      <Box sx={{
        maxWidth:'2rem',
        alignSelf:'center',
        mb:'2rem'
      }}>
        <TextField
          name="username"
          variant="outlined"
          helperText="This will be displayed on your page"
          label="Username"
          value={username}
          onChange={handleChange}
          type="text"
        />
      </Box>

      <Box sx={{
        maxWidth:'2rem',
        alignSelf:'center',
        mb:'2rem'}}>
        <TextField
          onChange={handleChange}
          name="email"
          variant="outlined"
          label="Email"
          value={email}
          type="email"
        />
      </Box>

      <Box sx={{
        maxWidth:'2rem',
        alignSelf:'center',
        mb:'2rem'
      }}>
        <TextField
          onChange={handleChange}
          name="password"
          variant="outlined"
          label="Password"
          value={password}
          type="password"
        />
      </Box>

      <Box sx={{
        maxWidth:'2rem',
        alignSelf:'center',
        mb:'2rem'
      }}>
        <TextField
          onChange={handleChange}
          name="confirmPassword"
          variant="outlined"
          label="Confirm password"
          value={confirmPassword}
          type="password"
        />
      </Box>

      <Box sx={{
        maxWidth:'2rem',
        alignSelf:'center',
        mb:'2rem'
      }}>
        <FormControlLabel
        control={
          <Checkbox name="tos" value={tosAccepted} onChange={handleChange} />
        }
        label="ToS GCWallet"
        />
      </Box>

      <Box sx={{
        maxWidth:'2rem',
        alignSelf:'center'
      }}>
        <Button onClick={createAccount}>Create account</Button>
      </Box>

      <Box sx={{
        maxWidth:'32rem',
        cursor:'pointer',
        borderRadius:'12px',
        alignSelf:'center',
        backgroundColor:'#D9D9D9',
        mt:'1rem'
      }}  onClick={() => {
          navigate("/login")
        }}>
        Already have account?
      </Box>
    </FormGroup>
  );
};
export default Register;
