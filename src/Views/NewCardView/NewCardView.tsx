import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { addNewCard, getAllGyms } from "../../Services/api-services";
import { IGym, NewCardAdd } from "../../Services/helpers";
import { UserContext } from "../../Services/UserContext";

const NewCardView = ()=>{
    const {user} = useContext(UserContext);
    const [barcode_id,setBarcodeId] = useState<string>("");
    const [gym_id,setGymId] = useState<string>("");
    const[gyms,setGyms] = useState<IGym[]|null>([]);

    const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = evt.target;
        switch(name){
            case "barcode":
                setBarcodeId(value);
                break;
        }
    }

    const handleChangeSelect = (evt:SelectChangeEvent) =>{
        setGymId(evt.target.value);
    }

    useEffect(()=>{
        const callApi = async () =>{
            let res:IGym[]|null = [];
            res = await getAllGyms();
            setGyms(res);
        };
        callApi();
    },[])

    const addCard = async () =>{
        if(user!=null){
            const newCard:NewCardAdd = {
                gym_id:gym_id,
                barcode:barcode_id,
                user_id:user._id
            }
            const res_inserted = await addNewCard(newCard);
        }        
    }

return(
    <FormGroup>
        <h1>Add Card</h1>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gym</InputLabel>
        <Select
          name="gym_select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gym_id}
          label="Gym"
          onChange={handleChangeSelect}>
            {gyms?.map((gym)=>{
                return(<MenuItem value={gym._id}>{gym.name}</MenuItem>)
            })}
        </Select>
      </FormControl>
        <TextField name="barcode" label="Barcode Text" variant="outlined" onChange={handleChange} value={barcode_id} type="text"/>
        <Button onClick={addCard}>Add Card</Button>
        <Footer/>
    </FormGroup>
)
}
export default NewCardView;