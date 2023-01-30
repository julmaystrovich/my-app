import styled from "styled-components";
import { Base } from "../../themes";

const StyledAccordionItem = styled.div`
color: #ffffff;
position: relative;
border-top: 1px solid #ffffff;
padding: 20px 40px 20px 0px;

.accordion {
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  outline: none;
  align-items: center;
}

.accordion__icon {
  position: absolute;
  left: calc(100% - 40px);
  top: 24px;
  font-size: 64px;
  line-height: 24px;
  font-weight: 300;
  transition: transform 0.2s ease;
}

.accordion__content {
  background-color: #030406;
  overflow: hidden;
  transition: max-height 0.2s ease;
}

.accordion__text {
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  letter-spacing: 0.08em;
  padding: 24px 0;
  text-align: left;
}

.accordion__heading {
  color: #ffffff;
  outline: none;
}

@media (max-width: 600px) {
  .accordion__heading {
      font-size: 16px;
  }
}
`;

StyledAccordionItem.defaultProps = { theme: Base };

export default StyledAccordionItem;
