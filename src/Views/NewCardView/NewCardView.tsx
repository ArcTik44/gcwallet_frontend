import {
  Box,
  Button,
  FormControl,
  FormGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { addNewCard, getAllGyms } from "../../Services/api-services";
import { IGym, NewCardAdd } from "../../Services/helpers";
import { UserContext } from "../../Services/UserContext";

const NewCardView = () => {
  const { user } = useContext(UserContext);
  const [barcode_id, setBarcodeId] = useState<string>("");
  const [gym_id, setGymId] = useState<string>("");
  const [gyms, setGyms] = useState<IGym[] | null>([]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    switch (name) {
      case "barcode":
        setBarcodeId(value);
        break;

      case "gym_select":
        setGymId(value);
        break;
    }
  };

  const handleChangeSelect = (evt: SelectChangeEvent) => {
    setGymId(evt.target.value);
  };

  useEffect(() => {
    const callApi = async () => {
      let res: IGym[] | null = [];
      res = await getAllGyms();
      setGyms(res);
    };
    callApi();
  }, []);

  const addCard = async () => {
    if (user != null) {
      const newCard: NewCardAdd = {
        barcode: barcode_id,
        gym_id: gym_id,
        user_id: user._id,
      };
      await addNewCard(newCard);
    }
  };

  return (
    <FormGroup>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "2.25rem",
          lineHeight: "2.5rem",
          fontWeight: 700,
          ml: "2rem",
        }}
      >
        Add Card
      </Typography>
      <FormControl fullWidth>
        <Box
          sx={{
            alignSelf: "center",
            mb: "2rem",
            mt:'2rem'
          }}
        >
          <Select
            sx={{ minWidth: 200 }}
            fullWidth={true}
            name="gym_select"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gym_id}
            onChange={handleChangeSelect}
          >
            {gyms?.map((gym) => {
              return <MenuItem value={gym._id}>{gym.name}</MenuItem>;
            })}
          </Select>
        </Box>
      </FormControl>

      <Box
        sx={{
          maxWidth: "36rem",
          alignSelf: "center",
          mb: "2rem",
        }}
      >
        <TextField
          name="barcode"
          label="Barcode Text"
          variant="outlined"
          onChange={handleChange}
          value={barcode_id}
          type="text"
        />
      </Box>

      <Box
        sx={{
          maxWidth: "36rem",
          alignSelf: "center",
        }}
      >
        <Button onClick={addCard}>Add Card</Button>
      </Box>
      <Footer />
    </FormGroup>
  );
};
export default NewCardView;
