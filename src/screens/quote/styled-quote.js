import styled from "styled-components";
//import { device } from "../../../../components/utils/devices";
import globalColors from "../../components/utils/global-colors";

const { black } = globalColors;

const StyledQuote = styled.div`
background-color: ${black};

    .box {
      justify-content: center;
      display: flex;
      margin: 0 auto;
      padding: 80px 0;
      width: 610px;

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

export default StyledQuote;
