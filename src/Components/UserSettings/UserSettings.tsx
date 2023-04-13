import { Button, FormGroup, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { userUpdate } from "../../Services/api-services";
import { UserContext } from "../../Services/UserContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const UserSettings = () => {
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

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
      case "confirm_password":
        setConfirmPassword(value);
        break;
    }
  };

  const updateDetails = async () => {
    const updated = {
      username: null,
      email: null,
      password: null,
    };
    userUpdate(updated);
  };

  return (
    <div>
      <Header username={user?.username} />
      <FormGroup>
        <div className="max-w-xl self-center mt-10 mb-8">
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          onChange={handleChange}
          value={username}
          type="text"
        />
        </div>

        <div className="max-w-xl self-center mb-8">
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          value={email}
          type="email"
        />
        </div>

        <div className="max-w-xl self-center mb-8">
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          onChange={handleChange}
          value={password}
          type="password"
        />
        </div>

        <div className="max-w-xl self-center mb-8">
        <TextField
          name="confirm_password"
          label="Confirm password"
          variant="outlined"
          onChange={handleChange}
          value={confirmPassword}
          type="password"
        />
        </div>

        <div className='max-w-xl self-center'>
          <Button onClick={updateDetails}>Confirm</Button>
        </div>
      </FormGroup>
      <div className="self-center">
        <Footer />
      </div>
    </div>
  );
};

export default UserSettings;
