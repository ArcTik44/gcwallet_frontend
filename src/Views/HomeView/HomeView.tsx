import { useNavigate } from "react-router-dom";
import CardList from "../../Components/CardList/CardList";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { IUser } from "../../Services/auth";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { isEmptyArray } from "../../Services/validations";
import { useEffect } from "react";
import { getUserById } from "../../Services/api-services";

const HomeView = () => {
  const navigate = useNavigate();
  const user  = useReadLocalStorage<IUser>('user');

  return (
    <>
      <Box
        onClick={() => {
          navigate("/user");
        }}
      >
        <Header username={user?.username} />
      </Box>

      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.25rem",
          lineHeight: "2.5rem",
          fontWeight: 700,
          ml: "2rem",
        }}
      >
        My cards
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent:'center',
          maxWidth: "46rem",
          borderRadius: "12px",
          mt: "1.25rem",
          minHeight:'18rem',
          backgroundColor: "#D9D9D9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
            justifyContent:'center',
            mt: "3.5rem",
          }}
        >
          {
            isEmptyArray(user?.cards) ? <Typography sx={{
              justifyContent: "center",
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              fontWeight: 700,
            }}>No cards yet</Typography> : <CardList cards={user?.cards} />
          }
          
        </Box>
      </Box>
      <Box sx={{
        mt:'8rem'
      }}>
        <Footer />
      </Box>
    </>
  );
};
export default HomeView;
