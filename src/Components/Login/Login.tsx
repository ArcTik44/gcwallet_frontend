import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Box, Button, FormGroup, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../Services/api-services";
import { IUser, LoginCred } from "../../Services/auth";
import { UserContext } from "../../Services/UserContext";
import { useLocalStorage } from "usehooks-ts";

const Login = () => {
  const [user,setUser] = useLocalStorage<IUser|undefined>("user",undefined);
  const [isLogged,setIsLogged] = useLocalStorage<boolean>("isLogged",false);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt: React.FormEvent<HTMLElement>) => {
    evt.preventDefault();
    const login: LoginCred = {
      email: email.trim(),
      password: password,
    };

    let res = await userSignIn(login);

    if (res != null) {
      setUser(res);
      setIsLogged(true);
      navigate("/");
    } else {
      console.log(666);
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          mt: "1rem",
          mb: "1.5rem",
        }}
        className="space-x-8"
      >
        <Typography variant="h3">GCWallet</Typography>

        <Box
          sx={{
            scale: "150%",
          }}
        >
          <AccountBalanceWalletIcon />
        </Box>
      </Box>

      <FormGroup>
        <Box
          sx={{
            maxWidth: "36rem",
            alignSelf: "center",
            mb: "2rem",
          }}
        >
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            value={email}
            type="email"
          />
        </Box>

        <Box
          sx={{
            maxWidth: "36rem",
            alignSelf: "center",
            mb: "2rem",
          }}
        >
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            onChange={handleChange}
            value={password}
            type="password"
          />
        </Box>

        <Box
          sx={{
            maxWidth: "36rem",
            alignSelf: "center",
          }}
        >
          <Button className="login_button" onClick={handleSubmit}>
            Login
          </Button>
        </Box>

        <Box
          sx={{
            alignSelf: "center",
            maxWidth: "32rem",
            borderRadius: "8px",
            backgroundColor: "#D9D9D9",
            mt: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/register");
          }}
        >
          No account yet?
        </Box>
      </FormGroup>
    </Box>
  );
};
export default Login;
