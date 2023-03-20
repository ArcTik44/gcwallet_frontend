import React from "react";
import { IGym } from "../../Services/helpers";

interface LayoutProps {
    gyms:IGym[]
}

const CardList:React.FC<LayoutProps> = () =>{

    return (<div style={{
        backgroundColor:'#D9D9D9',
        borderRadius:11,
        overflow:'scroll'
    }}>

    </div>)
}
export default CardList;