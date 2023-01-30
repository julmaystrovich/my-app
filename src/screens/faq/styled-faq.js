import styled from "styled-components";
//import { device } from "../../../../components/utils/devices";
import globalColors from "../../components/utils/global-colors";

const { black, white } = globalColors;

const StyledFAQ = styled.div`
background-color: ${black};

    .box {
      display: block;
      margin: 0 auto;
      padding: 80px 0;
      width: 1440px;

      h2 {
        color: ${white};
        padding: 0 0 60px;
        text-align: center;
      }

      .quote-text {
        color: #ffffff;
        font-style: italic;
        font-weight: 400;
        font-size: 60px;
        line-height: 70px;
        text-align: center;
        text-transform: uppercase;
      }
    }
    
`;

export default StyledFAQ;
