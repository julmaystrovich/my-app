import React from "react";
import Box from "../../box";
import StyledSlide from "./styled-slide";
import Text from "../../text";

const Slide = ({ arrayItems, ...rest }) => {
  return (
    <StyledSlide {...rest}>
        <img className="image" src={ arrayItems.img_path }></img>
        <Text className="name">{arrayItems.name}</Text>
        <Text className="desc">{arrayItems.description}</Text>
    </StyledSlide>
  );
};


export default Slide;