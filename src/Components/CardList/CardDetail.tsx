import { useEffect, useState } from "react";
import { getCardById, getGymById } from "../../Services/api-services";
import { ICard, IGym } from "../../Services/helpers";
import BarcodeImage from "../BarcodeImage/BarcodeImage";

interface LayoutProps{
    card_id:string;
}

const CardDetail:React.FC<LayoutProps> = ({card_id}) =>{

    const [card,setCard] = useState<ICard|null>();
    const [gym,setGym] = useState<IGym|null>(null);

    useEffect(()=>{
        const callApi = async () =>{
            let res_gym:IGym|null = await getGymById(card?.gym);
            setGym(res_gym);
            
            let res_card:ICard|null = await getCardById(card_id);
            setCard(res_card);
        };

        callApi();
    },[card_id,card?.gym])

    return (
        <div>
            <div>
                {gym?.name}
            </div>
            <div>
                {gym?.address}
            </div>
            <div>
                {gym?.email}
            </div>
            <div>
            </div>
            <div>
                <BarcodeImage barcode={card?.barcode ? card.barcode : "11111111"}/>
            </div>
        </div>
    )
};
export default CardDetail