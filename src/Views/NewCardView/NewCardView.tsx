import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useState } from "react";

const NewCardView = ()=>{
    const [barcode_id,setBarcodeId] = useState<string>("");
    const [gym_id,setGymId] = useState<string>("");
    const[tosAccepted,setTosAccepted] = useState<boolean>(false);

    const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = evt.target;
        switch(name){
            case "barcode":
                setBarcodeId(value);
                break;

            case "tos":
                setTosAccepted(evt.target.checked);
                break;
        }
    }

    const handleChangeSelect = (evt:SelectChangeEvent) =>{
        setGymId(evt.target.value);
    }

    const addCard = () =>{

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
          <MenuItem value={10}>Sport centrum K Vinici</MenuItem>
        </Select>
      </FormControl>
        <TextField name="barcode" label="Barcode Text" variant="outlined" onChange={handleChange} value={barcode_id} type="text"/>
        <Button onClick={addCard}>Add Card</Button>
    </FormGroup>
)
}
export default NewCardView;