import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./styled-button";

const Button = ({
  label,
  themeButton,
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Button text */
  label: PropTypes.string,
  /** Width of button */
  width: PropTypes.string,
  /** Height of button */
  height: PropTypes.string,
  /** Takes the path to the icon (the icon must be located in a static folder)  */
  icon: PropTypes.string,
  /** Button tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Sets the nim width of the button */
  minwidth: PropTypes.string,
  /** What the button will trigger when clicked */
  onClick: PropTypes.func,
  /** If the button should submit the form */
  isSubmit: PropTypes.bool,
};

Button.defaultProps = {
  label: "",
  typeButton: "primary",
  width: "auto",
  height: "78px",
  icon: null,
  tabIndex: -1,
  minwidth: "unset",
};

export default Button;
