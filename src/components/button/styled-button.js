import styled from "styled-components";
import { Base } from "../themes";

const StyledButton = styled.button`
  overflow: ${(props) => props.theme.button.overflow};
  text-overflow: ${(props) => props.theme.button.textOverflow};
  white-space: ${(props) => props.theme.button.whiteSpace};
  outline: ${(props) => props.theme.button.outline};
  box-sizing: ${(props) => props.theme.button.boxSizing};
  margin: ${(props) => props.theme.button.margin};
  display: ${(props) => props.theme.button.display};
  text-align: ${(props) => props.theme.button.textAlign};
  text-decoration: ${(props) => props.theme.button.textDecoration};

  outline: none;
  outline-color: none;
  -webkit-tap-highlight-color: transparent;

  letter-spacing: normal;

  height: ${(props) => props.height};
  width: ${(props) => props.width};

  min-width: ${(props) => props.minwidth || "min-content"};

  border-radius: ${(props) => props.theme.button.borderRadius};

  font-size: ${(props) => props.fontSize || props.theme.button.fontSize};
  font-weight: ${(props) => props.fontWeight || props.theme.button.fontWeight};
  text-transform: ${(props) => props.theme.button.textTransform};
  line-height: ${(props) => props.lineHeight || props.theme.button.lineHeight};

  color: ${(props) => props.textColor || props.theme.button.textColor};

  padding: ${(props) => (props.padding ? props.padding : "0 32px")};
  transition-duration: ${(props) =>
    props.transitionDuration || props.theme.button.transitionDuration};

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.typeButton === "white" ? 0.9 : 1)};

  &:hover {
    cursor: pointer;
    opacity: ${(props) => (props.typeButton === "white" ? 1 : 1)};
  }

  .btn-with-icon {
    display: inline-block;
    vertical-align: middle;
  }
`;

StyledButton.defaultProps = { theme: Base };

export default StyledButton;
