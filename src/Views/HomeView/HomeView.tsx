import { useNavigate } from "react-router-dom";
import CardList from "../../Components/CardList/CardList";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { IUser } from "../../Services/auth";
import { useReadLocalStorage } from "usehooks-ts";
import { isEmptyArray } from "../../Services/validations";

const HomeView = () => {
  const navigate = useNavigate();
  const user  = useReadLocalStorage<IUser|undefined>('user');

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
          maxWidth: "48rem",
          borderRadius: "12px",
          mt: "1.25rem",
          backgroundColor: "#D9D9D9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
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
      <Footer />
    </>
  );
};
export default HomeView;
