import { useEffect, useState } from "react";
import { ICard } from "../../Services/helpers";

interface LayoutProps{
    card_id:string;
}

const CardDetail:React.FC<LayoutProps> = ({card_id}) =>{

    const [card,setCard] = useState<ICard|null>(null);
    useEffect(()=>{
        
    })

    return (
        <div>

        </div>
    )
};
export default CardDetail