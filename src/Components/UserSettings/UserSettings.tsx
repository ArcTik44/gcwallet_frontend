import { Box, Button, FormGroup, TextField } from "@mui/material";
import { useState } from "react";
import { userUpdate } from "../../Services/api-services";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useReadLocalStorage } from "usehooks-ts";
import { IUser } from "../../Services/auth";

const UserSettings = () => {
  const user = useReadLocalStorage<IUser|undefined>('user');
  const [username, setUsername] = useState<string | undefined>(user?.username);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    switch (name) {
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
  };

  const updateDetails = async () => {
    if(password===confirmPassword){
      const updated = {
        username: null,
        password: null,
      };
      userUpdate(updated);
    }
  };

  return (
    <Box>
      <Header username={user?.username} />
      <FormGroup>
        <Box
          sx={{
            maxWidth: "36rem",
            alignSelf: "center",
            mb: "2rem",
            mt: "2.5rem",
          }}
        >
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            onChange={handleChange}
            value={username}
            type="text"
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
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            disabled
            value={user?.email}
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
            mb: "2rem",
          }}
        >
          <TextField
            name="confirm_password"
            label="Confirm password"
            variant="outlined"
            onChange={handleChange}
            value={confirmPassword}
            type="password"
          />
        </Box>

        <Box
          sx={{
            maxWidth: "36rem",
            alignSelf: "center",
          }}
        >
          <Button onClick={updateDetails}>Confirm</Button>
        </Box>
      </FormGroup>
      <Box
        sx={{
          alignSelf: "center",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default UserSettings;
