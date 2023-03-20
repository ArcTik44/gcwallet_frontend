import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer:React.FC = () =>{

    const navigate = useNavigate();
    const location = useLocation();

    if(location.pathname=='/addcard'){
        return(
            <div className='container' style={{display:'flex',
            alignItems:'center',
            justifyContent:'center'}}>
                <div onClick={()=>{navigate('/')}}><CancelIcon/></div>
            </div>        )
    }
    else return(
        <div className="container"
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}
        >
                <div className='footer item' onClick={() => { navigate("/"); } }><HomeIcon /></div>
                <div className='footer item' onClick={() => { navigate("/"); } }><FitnessCenterIcon /></div>
                <div className='footer item' onClick={() => { navigate("/addcard"); } }><AddCardIcon /></div>
                <div className='footer item' onClick={() => { navigate("/user"); } }><SettingsIcon /></div>
                <div className='footer item' onClick={() => { navigate("/user"); } }><AccountBoxIcon /></div>
            </div>
    )
    
}
export default Footer;