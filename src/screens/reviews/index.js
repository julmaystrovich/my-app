import React from "react";
import Text from "../../components/text";
import Box from "../../components/box";
import Heading from "../../components/heading";
import StyledReviews from "./styled-reviews";
import Carousel from "../../components/carousel";

const Reviews = ({ ...rest }) => {
  return (
    <StyledReviews id="review">
      <Box>
        <Heading level={2}>Отзывы</Heading>
        <Carousel />
      </Box>
    </StyledReviews>
  );
};

export default Reviews;