import styled, { css } from "styled-components";
import arrow from "../../imgs/arrow.png"

const StyledCarousel = styled.div`
  margin: 0 auto;
  padding: 0px;
  .slick-slider {
    margin: 0 auto;
    padding: 0px;
    .slide {
      .carousel-image {
        width: 100%;
      }
    }
    .slick-list{
      margin: 40px 60px;
    }
    .slick-arrow {
      position: relative;
      cursor: pointer;
      font-size: 0;
      height: 12px;
      outline: none;
      display: block;
      width: 26px;
      margin: 0 auto;
    }
    .slick-arrow:before {
      content: "";
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-position: 0 0;
      display: block;
      height: 45px;
      width: 22px;
      margin: 0 auto;
    }
    .slick-prev, .slick-next {
      z-index: 1;
      transform: none !important;
      position: absolute;
      top: 50%;
    }
    .slick-prev::before {
      transform: rotate(180deg);
    }
    .slick-next::before {
      transform: rotate(0deg);
    }
    .slick-dots li
{
    position: relative;
    display: none;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
}
.slick-dots li.slick-active
{
    display: inline-block;
}
  }   
  
  .active-num {
    font-size: 40px;
  }

  .num {
    font-size: 28px;
  }
`;

export default StyledCarousel;
