import React from "react";
import Box from "../../components/box";
import Button from "../../components/button";
import Heading from "../../components/heading";
import StyledHeader from "./styled-header";

const Header = ({ ...rest }) => {
  return (
    <StyledHeader>
      <Box>
        <Heading level={1}><span>Создам</span> <span>твой</span> <span>уникальный</span> <span>аромат</span></Heading>
        <Button className="main-button" label="заказать" />
      </Box>
    </StyledHeader>
  );
};

export default Header;