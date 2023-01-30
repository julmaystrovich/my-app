import React from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./sub-components/slide";
import StyledCarousel from "./carousel-styled";
import car_items from "../../data/carousel-items.js";

const Carousel = ({ ...rest }) => {
  const numSlides = car_items.length;

  const settings =  {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    customPaging: (i) => {
      return <span className="num"><span className="active-num">{i + 1}</span>/{numSlides}</span>;
    },
  };

  const sliders = car_items.map((item, idx) => (
    <Slide
      key={`item-${idx}`}
      arrayItems={item}
      className="carousel-cards"
    />
  ));

  return (
    <StyledCarousel {...rest}>
      <Slider {...settings}>{sliders}</Slider>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  /** Carousel settings*/
  settingsCarousel: PropTypes.object,
  /** Carousel array item*/
  items: PropTypes.arrayOf(PropTypes.object),
  /** Carousel arrows*/
  isArrows: PropTypes.bool,
  /** Carousel tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
};

Carousel.defaultProps = {
  settingsCarousel: {},
  isArrows: true,
  tabIndex: -1,
};

export default Carousel;
