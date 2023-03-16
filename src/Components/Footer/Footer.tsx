import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer:React.FC = () =>{

    const navigate = useNavigate();
    

    return(
    
    <>
    <div className="container">
            <div onClick={() => { navigate("/"); } }><HomeIcon /></div>
            <div onClick={() => { navigate("/"); } }><FitnessCenterIcon /></div>
            <div onClick={() => { navigate("/addcard"); } }><AddCardIcon /></div>
            <div onClick={() => { navigate("/user"); } }><SettingsIcon /></div>
            <div onClick={() => { navigate("/user"); } }><AccountBoxIcon /></div>
        </div>
        
        <div className='container'>
            <div onClick={()=>{navigate('/')}}><CancelIcon/></div>
        </div></>

    )
    
}
export default Footer;