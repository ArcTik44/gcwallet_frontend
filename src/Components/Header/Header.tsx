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
        <div
        style={{
            backgroundColor:'#D9D9D9',
            borderRadius:12,
            display:'flex',
            alignItems:'center',
            maxWidth:300,
            alignContent:'center'
        }}
        className="container" onClick={()=>{navigate('/user')}}>
            <div style={{display:'inline-block',paddingLeft:20}}><Avatar {...stringAvatar(username)}/></div>
            <div style={{display:'inline-block',paddingLeft:50}}><h1>{username}</h1></div>
        </div>
    </>)
}
export default Header;