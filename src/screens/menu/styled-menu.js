import styled, { css } from "styled-components";
import globalColors from "../../components/utils/global-colors";
import logo from "../../imgs/ak_logo.svg";

const { black, white } = globalColors;

const StyledMenu = styled.div`
  align-items: center;
  border: none;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr auto auto;
  grid-template-columns: auto 1fr auto auto;
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  padding: 0 80px;
  box-sizing: border-box;
  height: auto;
  font-size: 12px;
  color: ${white};
  background-color: ${black};
  position: fixed;
  width: 100%;
  z-index: 100;

  &.active {
    border-bottom: 1px solid ${white};
  }
  
  .phone {
    font-size: 18px;
  }

  .site-logo {
    background: url(${logo}) no-repeat 0 50%;
    background-size: contain;
    margin: 16px 0;
    position: relative;
    width: 109px;
    height: 62px;
  }
  .header-menu {
    display: flex;
    justify-content: space-between;
    gap: 0 48px;
    margin: 0 auto;
    padding: 0;
    width: 597px;
    .menu-item {
      list-style-type: none;
      text-transform: uppercase;
      > a {
        color: ${white};
        font-size: 16px;
        letter-spacing: 0.08em;
        text-decoration: none;
      }
    }
  }
`;

export { StyledMenu };
