import styled from "styled-components";
//import { device } from "../../../../components/utils/devices";
import globalColors from "../../components/utils/global-colors";

const { black, white } = globalColors;

const StyledFooter = styled.div`
    background-color: ${black};

    .box {
      align-items: start;
      gap: 0 52px;
      justify-content: space-between;
      margin: 0 auto;
      padding: 80px 0;
      width: 1440px;

      h4 {
        color: ${white};
      }

      > div {
        display: block;
        width: 25%;
        > a {
          align-items: center;
          gap: 24px;
          display: flex;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0.08em;
          padding: 20px 0 0;
        }

        > span {
          color: #FFFFFF;
          display: block;
          font-size: 16px;
          line-height: 160%;  
          letter-spacing: 0.048em;
          padding: 20px 0 0;

          &.copyright {
            font-size: 24px;
            padding: 158px 0 0;
          }
        }
      }
    }
    
`;

export default StyledFooter;
