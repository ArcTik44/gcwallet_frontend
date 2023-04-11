import { ICard, IGym } from '../../Services/helpers';
import { useEffect, useState } from 'react';
import { getCardById, getGymById } from '../../Services/api-services';
import BarcodeImage from '../BarcodeImage/BarcodeImage';

interface LayoutProps{
    card_id: string|undefined;
}

const CardContainer:React.FC<LayoutProps> = ({card_id}) => {

    const [gym,setGym] = useState<IGym|null>(null);
    const [card,setCard] = useState<ICard|null>(null);

    useEffect(()=>{
        const callApi = async() =>{
            let res_card:ICard|null = null;
            res_card = await getCardById(card_id);
            setCard(res_card);

            let res_gym:IGym|null = null;
            res_gym = await getGymById(card?.gym);
            setGym(res_gym);
        };
        callApi();
    })

    return (
        <div>
           <div>
            {gym?.name}
            </div> 
            <div>

            </div>
            <div>
                <BarcodeImage barcode={card?.barcode ? card.barcode : "111111"}/>
            </div>
        </div>
    )
}
export default CardContainer;