import styled from "styled-components";
//import { device } from "../../../../components/utils/devices";

import logo_left from "../../imgs/pic_1.svg";
import logo_right from "../../imgs/pic_2.svg";
import globalColors from "../../components/utils/global-colors";

const { black } = globalColors;

const StyledHeader = styled.div`
    background-color: ${black};

    .box {
      background-image: url(${logo_left}), url(${logo_right});
      background-position-x: left, right;
      background-position-y: center;
      background-repeat: no-repeat;
      background-size: 400px auto;
      height: calc(100vh - 173px);
      justify-content: space-between;
      display: block;
      margin: 0 auto;
      padding: 94px 0 80px;
      width: 1440px;

      h1 {
        padding: 157px 0 60px;
        text-align: center;
        span {
          background: linear-gradient(90.89deg, #FFFFFF 0.25%, #727272 99.7%);
          display: block;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      } 
      .main-button {
        background: linear-gradient(92.29deg, #FFFFFF 0.63%, #727272 133.92%);
        letter-spacing: 0.08em;
      }
    }
    
`;

export default StyledHeader;
