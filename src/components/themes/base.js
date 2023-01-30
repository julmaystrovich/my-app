import globalColors from "../utils/global-colors";

const {
  white,
  black
} = globalColors;

const Base = {
  button: {
    textColor: black,
    borderRadius: "3px",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    outline: "none",
    boxSizing: "border-box",
    fontWeight: "400",
    margin: "0",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    topVerticalAlign: "text-top",
    middleVerticalAlign: "middle",
    bottomVerticalAlign: "text-bottom",
    lineHeight: "41px",
    textTransform: "uppercase",
    fontSize: "26px",
    transitionDuration: "0.3s",

    mobile: {
      height: "48px",
      width: "100%",
    },
  },

  externalLink: {
    color: white,
    textDecoration: "underline",
    cursor: "default",
    hoverColor: white,
    hoverTextTransform: "none",
    hoverTextDecoration: "none",
    hoverCursor: "pointer",
  },

  header: {
    fontSize: ["60px", "60px", "48px", "36px", "28px"],
    lineHeight: ["70px", "70px", "56px", "42px", "32px"],
    fontWeight: 300,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  text: {
    color: black,
    display: "inline-block",
    height: "auto",
    width: "auto",
    padding: "0",
    margin: "0",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "21px",
    textAlign: "left",
    textTransform: "none",
    textDecoration: "none",
    textShadow: "none",
    whiteSpace: "wrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    cursor: "default",
    hoverColor: black,
    hoverTextTransform: "none",
    hoverTextDecoration: "none",
    hoverTextShadow: "none",
    hoverCursor: "default",
  },

  iconButton: {
    width: "20px",
  },

  scrollbar: {
    backgroundColorVertical: "rgba(0, 0, 0, 0.1)",
    backgroundColorHorizontal: "rgba(0, 0, 0, 0.1)",
  },

  box: {
    background: "unset",
    border: "none",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignContent: "flex-start",
  },
};

export default Base;
