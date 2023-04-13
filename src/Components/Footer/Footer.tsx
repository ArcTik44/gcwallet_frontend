import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCardIcon from '@mui/icons-material/AddCard';
import CancelIcon from '@mui/icons-material/Cancel';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Services/UserContext';

const Footer:React.FC = () =>{

    const{userLogout} = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    if(location.pathname==='/addcard'){
        return(
            <div className='flex self-center scale-200' onClick={()=>{navigate('/')}}><CancelIcon/></div>
            );
    }
    else return(
        <div className="flex items-center justify-center space-x-12 mt-10 ">
                <div className='border-black rounded-xl cursor-pointer bg-gray-300'>
                    <div className='scale-150 p-4' onClick={() => { navigate("/"); } }>
                        <HomeIcon/>
                    </div>
                </div>

                <div className='border-black rounded-xl cursor-pointer bg-gray-300'>
                    <div className='scale-150 p-4' onClick={() => { navigate("/"); } }>
                        <FitnessCenterIcon />
                    </div>
                </div>

                <div className='border-black rounded-xl cursor-pointer bg-gray-300'>
                    <div className='scale-150 p-4' onClick={() => { navigate("/addcard"); } }>
                        <AddCardIcon />
                    </div>
                </div>

                <div className='border-black rounded-xl cursor-pointer bg-gray-300'>
                    <div className='scale-150 p-4' onClick={() => { navigate("/user"); } }>
                        <SettingsIcon />
                    </div>
                </div>

                <div className='border-black rounded-xl cursor-pointer bg-gray-300'>
                    <div className='scale-150 p-4' onClick={() => { userLogout() } }>
                        <AccountBoxIcon />
                    </div>
                </div>
        </div>
    )
    
}
export default Footer;