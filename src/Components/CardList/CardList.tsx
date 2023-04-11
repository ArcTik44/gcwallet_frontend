import React from "react";
import CardContainer from "./CardContainer";

interface LayoutProps {
    cards:string[]|undefined;
}

const CardList:React.FC<LayoutProps> = ({cards}) =>{


    return (<div style={{
        backgroundColor:'#D9D9D9',
        borderRadius:11,
        overflow:'scroll'
    }}>
        {
            cards?.map((card)=>{
                return <CardContainer card_id={card}/>
            })
        }
    </div>);
}
export default CardList;