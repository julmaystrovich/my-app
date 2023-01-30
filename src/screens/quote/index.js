import React from "react";
import Text from "../../components/text";
import Box from "../../components/box";
import StyledQuote from "./styled-quote";

const Quote = ({ ...rest }) => {
  return (
    <StyledQuote>
      <Box>
        <Text className="quote-text">Каждый человек <br /> уникален <br /> как и его аромат</Text>
      </Box>
    </StyledQuote>
  );
};

export default Quote;