import React from "react";
import {Avatar} from '@mui/material'
import { useNavigate } from "react-router-dom";

interface LayoutProps {
    username: string|undefined;
}

const Header:React.FC<LayoutProps> = ({username}) =>{

  const navigate = useNavigate();

    if(username===undefined){
      username = "User"
    }
    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name: string) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}`,
        };
      }

    return(<>
        <div className="dark:bg-gray-300 rounded-xl flex items-center mt-2 mb-4 ml-10 content-center max-w-sm" 
        onClick={()=>{navigate('/user')}}>
            <div className="inline-block pl-12 mt-2 mb-2 cursor-pointer"><Avatar {...stringAvatar(username)}/></div>
            <div className="inline-block pl-12 mt-2 mb-2 cursor-pointer font-bold text-3xl" ><h1>{username}</h1></div>
        </div>
    </>)
}
export default Header;