import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCardIcon from "@mui/icons-material/AddCard";
import CancelIcon from "@mui/icons-material/Cancel";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";

const Footer: React.FC = () => {
  const [isLogged,setIsLogged] = useLocalStorage('isLogged',useReadLocalStorage('isLogged'));
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/addcard") {
    return (
      <Box
        sx={{
          display: "flex",
          mt:'1.5rem',
          alignSelf: "center",
          scale: "200%",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <CancelIcon />
      </Box>
    );
  } else
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "2.5rem",
        }}
        className="space-x-4"
      >
        <Box
          sx={{
            borderColor: "#000000",
            borderRadius: "0.75rem",
            borderWidth: "0.125rem",
            cursor: "pointer",
            backgroundColor: "#D9D9D9",
          }}
        >
          <Box
            sx={{
              scale: "150%",
              p: "1rem",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <HomeIcon />
          </Box>
        </Box>

        <Box
          sx={{
            borderColor: "#000000",
            borderWidth: "0.125rem",
            borderRadius: "0.75rem",
            cursor: "pointer",
            backgroundColor: "#D9D9D9",
          }}
        >
          <Box
            sx={{
              scale: "150%",
              p: "1rem",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <FitnessCenterIcon />
          </Box>
        </Box>

        <Box
          sx={{
            borderColor: "#000000",
            borderRadius: "0.75rem",
            borderWidth: "0.125rem",
            cursor: "pointer",
            backgroundColor: "#D9D9D9",
          }}
        >
          <Box
            sx={{
              scale: "150%",
              p: "1rem",
            }}
            onClick={() => {
              navigate("/addcard");
            }}
          >
            <AddCardIcon />
          </Box>
        </Box>

        <Box
          sx={{
            borderColor: "#000000",
            borderRadius: "0.75rem",
            borderWidth: "0.125rem",
            cursor: "pointer",
            backgroundColor: "#D9D9D9",
          }}
        >
          <Box
            sx={{
              scale: "150%",
              p: "1rem",
            }}
            onClick={() => {
              navigate("/user");
            }}
          >
            <SettingsIcon />
          </Box>
        </Box>

        <Box
          sx={{
            borderColor: "#000000",
            borderRadius: "0.75rem",
            borderWidth: "0.125rem",
            cursor: "pointer",
            backgroundColor: "#D9D9D9",
          }}
        >
          <Box
            sx={{
              scale: "150%",
              p: "1rem",
            }}
            onClick={() => {
              setIsLogged(false); 
            }}
          >
            <AccountBoxIcon />
          </Box>
        </Box>
      </Box>
    );
};
export default Footer;
