import React from "react";

const CustomButton = ({ type, title, backgroud, color }) => {
  const styles = {
    background: `${backgroud}`,
    color: `${color}`,
    border: "none",
    outline: 0,
    width: "100%",
    padding: "20px 0",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "15px",
  };

  return (
    <button type={type} style={{ ...styles }}>
      {title}
    </button>
  );
};

export default CustomButton;
