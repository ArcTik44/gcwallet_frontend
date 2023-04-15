import { ICard, IGym } from "../../Services/helpers";
import { useEffect, useState } from "react";
import { getCardById, getGymById } from "../../Services/api-services";
import BarcodeImage from "../BarcodeImage/BarcodeImage";
import { Box } from "@mui/material";

interface LayoutProps {
  card_id: string;
}

const CardContainer: React.FC<LayoutProps> = ({ card_id }) => {
  const [gym, setGym] = useState<IGym | null>(null);
  const [card, setCard] = useState<ICard | null>(null);

  useEffect(() => {
    const callApi = async () => {
      let res_card: ICard | null = null;
      res_card = await getCardById(card_id);
      setCard(res_card);

      let res_gym: IGym | null = null;
      res_gym = await getGymById(card?.gym);
      setGym(res_gym);
    };
    callApi();
  });

  return (
    <Box
      sx={{
        display:'flex',
        borderWidth:'0.125rem',
        borderColor: "#000000",
        borderRadius: "0.75rem",
        maxWidth: "16rem",
        justifyContent: "center",
        alignItems:'center'
      }}
    >
      <Box>
        {gym?.name}
      </Box>
      <Box>{card?.subscription as unknown as string}</Box>
      <Box>
        <BarcodeImage barcode={card?.barcode ? card.barcode : "111111"} />
      </Box>
    </Box>
  );
};
export default CardContainer;
