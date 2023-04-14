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
        minWidth: "fill",
        minHeight: "50px",
        maxHeight: "8rem",
        overflowY: "scroll",
        backgroundColor: "#D9D9D9",
      }}
    >
      {cards?.map((card) => {
        return <CardContainer card_id={card} />;
      })}
    </Box>
  );
};
export default CardList;
