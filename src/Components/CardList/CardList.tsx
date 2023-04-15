import React from "react";
import CardContainer from "./CardContainer";
import { Box } from "@mui/material";

interface LayoutProps {
  cards: string[] | undefined;
}

const CardList: React.FC<LayoutProps> = ({ cards }) => {
  return (
    <Box
      sx={{
        minWidth: "45rem",
        minHeight: "18rem",
        overflowY: "scroll",
        alignSelf:'center',
        alignItems:'center',
        pl:'14rem'
      }}
    >
      {cards?.map((card) => {
        return <CardContainer card_id={card} />;
      })}
    </Box>
  );
};
export default CardList;
