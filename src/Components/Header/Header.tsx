import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  username: string | undefined;
}

const Header: React.FC<LayoutProps> = ({ username }) => {
  const navigate = useNavigate();

  if (username === undefined) {
    username = "User";
  }
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "24rem",
          alignItems: "center",
          alignContent: "center",
          borderWidth: "0.125rem",
          borderColor: "#000000",
          backgroundColor: "#D9D9D9",
          borderRadius: "12px",
          mt: "0.5rem",
          ml: "2.5rem",
          mb: "1rem",
        }}
        onClick={() => {
          navigate("/user");
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            cursor: "pointer",
            pl: "3rem",
            mb: "0.5rem",
            mt: "0.5rem",
          }}
        >
          <Avatar {...stringAvatar(username)} />
        </Box>
        <Box
          sx={{
            diplay: "inline-block",
            cursor: "pointer",
            pl: "3rem",
            mb: "0.5rem",
            mt: "0.5rem",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
            }}
          >
            {username}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Header;
