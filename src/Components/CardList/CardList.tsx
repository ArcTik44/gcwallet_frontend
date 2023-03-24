import React, { useState } from "react";
import { ICard} from "../../Services/helpers";

interface LayoutProps {
    cards:string[]|undefined;
}

const CardList:React.FC<LayoutProps> = () =>{
    const[cards,setCards] = useState<ICard[]>([]);


    return (<div style={{
        backgroundColor:'#D9D9D9',
        borderRadius:11,
        overflow:'scroll'
    }}>

    </div>);
}
export default CardList;