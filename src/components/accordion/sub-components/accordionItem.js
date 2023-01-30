import React, { useRef, useState } from "react";
import Heading from "../../heading";
import StyledAccordionItem from "./styled-accordionItem";

const AccordionItem = ({
  heading,
  children,
  isCollapsed,
  onClick,
  isMenu,
  isMobMenu,
  ...rest
}) => {
  const content = useRef();
  const [active, setActive] = useState(false);
  return (
    <StyledAccordionItem {...rest} onClick={() => setActive(!active)}>
      <div className="accordion">
        <Heading
          level={4}
          style={{ cursor: "pointer" }}
          className="accordion__heading"
        >
          {heading}
        </Heading>
        <div className="accordion__icon">{!active ? "+" : "-"}</div>
      </div>
      <div
        ref={content}
        style={{
          maxHeight: `${isMenu && !isMobMenu ? "fit-content" : (active ? `${content.current.scrollHeight}px` : "0px")}`,
        }}
        className="accordion__content"
      >
        <div className="accordion__text">{children}</div>
      </div>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
