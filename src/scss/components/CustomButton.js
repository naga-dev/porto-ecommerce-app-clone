import React from "react";

const CustomButton = ({ type, title }) => {
  const styles = {
    background: "#222529",
    border: "none",
    outline: 0,
    width: "100%",
    padding: "20px 0",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#fff",
  };
  return (
    <button type={type} style={{ ...styles }}>
      {title}
    </button>
  );
};

export default CustomButton;
