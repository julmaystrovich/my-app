import styled from "styled-components";
//import { device } from "../../../../components/utils/devices";
import bg_dust from "../../imgs/bg_dust.png";
import globalColors from "../../components/utils/global-colors";

const { white } = globalColors;

const StyledReviews = styled.div`
    background-color: ${white};
    background-image: url(${bg_dust});
    background-size: 1440px auto;

    .box {
      display: block;
      margin: 0 auto;
      padding: 80px;
      width: 1280px;

      h2 {
        font-size: 42px;
        text-align: center;
      }

      .collections-box {
        padding: 60px 0 0;
        width: 100%;

        .collection-box {
          align-items: flex-start;
          display: flex;
          gap: 0 26px;
          padding: 60px 0 0;
          width: 100%;
          > div {
            text-align: left;

            &:nth-child(2n) {
              padding: 240px 0 0;
            }

            h4 {
              padding: 24px 0 20px;
            }
            > span {
              font-size: 16px;
              line-height: 160%;
              letter-spacing: 0.08em;
            }
          }
        }
      }
    }
`;

export default StyledReviews;