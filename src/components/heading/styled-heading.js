import styled from "styled-components";
import { Base } from "../themes";
import StyledText from "../text/styled-text";

const fontSizeStyle = (props) => props.theme.header.fontSize[props.level];
const lineHeightStyle = (props) => props.theme.header.lineHeight[props.level];

const StyledHeading = styled(StyledText)`
  font-size: ${(props) => props.fontSize || fontSizeStyle(props)};
  line-height: ${(props) => props.lineHeight || lineHeightStyle(props)};
  font-weight: ${(props) => props.fontWeight || props.theme.header.fontWeight};
  letter-spacing: ${(props) => props.letterSpacing || props.theme.header.letterSpacing};
  text-transform: ${(props) => props.textTransform || props.theme.header.textTransform};
`;

StyledHeading.defaultProps = { theme: Base };

export default StyledHeading;
