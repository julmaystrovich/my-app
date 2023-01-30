import styled from "styled-components";
//import { device } from "../../../../components/utils/devices";
import bg_dust from "../../imgs/bg_dust.png";
import about_pic from "../../imgs/about_pic.svg";
import globalColors from "../../components/utils/global-colors";

const { white } = globalColors;

const StyledAbout = styled.div`
    background-color: ${white};
    background-image: url(${bg_dust});
    background-size: 1440px auto;

    .about-box {
      background-image: url(${about_pic});
      background-repeat: no-repeat;
      background-position: calc(100% - 80px) 90%;
      display: block;
      margin: 0 auto;
      padding: 80px;
      width: 1280px;

      .about-text {
        display: block;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0.08em;
        padding: 0 24px 24px 0;
        text-align: left;
        width: 845px;
      }

      h2 {
        padding: 0 0 60px;
        text-align: center;
      }
    }

    .why-box {
      display: block; 
      margin: 0 auto;
      padding: 0 80px 80px;
      width: 1280px;
      .container {
        gap: 0 20px;
        padding: 60px 0 0;
        .inside-container {
          border-left: 0.5px solid #000000;
          width: 33%;
          div {
            padding: 0 0 0 20px;
            text-align: left;
  
            .why-text {
              font-size: 16px;
              line-height: 160%;
              letter-spacing: 0.08em;
              padding: 20px 0 0;
            }
          }
        } 
      }

    }
    
`;

export default StyledAbout;
