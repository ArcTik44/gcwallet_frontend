import React from "react";
import CardContainer from "./CardContainer";

interface LayoutProps {
    cards:string[]|undefined;
}

const CardList:React.FC<LayoutProps> = ({cards}) =>{

    return (<div className="min-w-150 min-h-150 overflow-y-scroll bg-gray-300 pt-50">
        {
            cards?.map((card)=>{
                return <CardContainer card_id={card}/>
            })
        }
    </div>);
}
export default CardList;