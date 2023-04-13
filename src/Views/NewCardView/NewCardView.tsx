import { Button, FormControl, FormGroup, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
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

            case "gym_select":
                setGymId(value);
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
                barcode:barcode_id,
                gym_id:gym_id,
                user_id:user._id
            }
           await addNewCard(newCard);
        }        
    }

return(
    <FormGroup>
        <h1 className="flex items-center text-4xl font-bold ml-8">Add Card</h1>
        <FormControl fullWidth>
    
        <div className="self-center mb-8">
        <Select
          sx={{ minWidth: 200 }}
          fullWidth={true}
          name="gym_select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gym_id}
          onChange={handleChangeSelect}>
            {gyms?.map((gym)=>{
                return(<MenuItem value={gym._id}>{gym.name}</MenuItem>)
            })}
        </Select>
        </div>
        </FormControl>
        
        <div className="max-w-xl self-center mb-8">
            <TextField name="barcode" label="Barcode Text" variant="outlined" onChange={handleChange} value={barcode_id} type="text"/>
        </div>

        <div className="max-w-xl self-center">
            <Button onClick={addCard}>Add Card</Button>
        </div>
        <Footer/>
    </FormGroup>
)
}
export default NewCardView;