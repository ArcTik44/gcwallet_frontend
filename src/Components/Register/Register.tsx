import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField
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
      <div className="flex justify-center items-center space-x-8 mt-4 mb-6">
        <h1 className="text-4xl font-semibold">GCWallet</h1>
        <div className="scale-150">
        <AccountBalanceWalletIcon />
        </div>
      </div>

      <div className="max-w-xl self-center mb-8">
        <TextField
          name="username"
          variant="outlined"
          helperText="This will be displayed on your page"
          label="Username"
          value={username}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div className="max-w-xl self-center mb-8">
        <TextField
          onChange={handleChange}
          name="email"
          variant="outlined"
          label="Email"
          value={email}
          type="email"
        />
      </div>

      <div className="max-w-xl self-center mb-8">
        <TextField
          onChange={handleChange}
          name="password"
          variant="outlined"
          label="Password"
          value={password}
          type="password"
        />
      </div>

      <div className="max-w-xl self-center mb-8">
        <TextField
          onChange={handleChange}
          name="confirmPassword"
          variant="outlined"
          label="Confirm password"
          value={confirmPassword}
          type="password"
        />
      </div>

      <div className="max-w-xl self-center mb-8">
        <FormControlLabel
        control={
          <Checkbox name="tos" value={tosAccepted} onChange={handleChange} />
        }
        label="ToS GCWallet"
        />
      </div>

      <div className="max-w-xl self-center">
        <Button onClick={createAccount}>Create account</Button>
      </div>

      <div className="max-w-lg cursor-pointer rounded mt-4 self-center bg-slate-200"
        onClick={() => {
          navigate("/login")
        }}>
        Already have account?
      </div>
    </FormGroup>
  );
};
export default Register;
