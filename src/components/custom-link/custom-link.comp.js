import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ path, type, title, backgroud, color }) => {
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
    display: "block",
    textAlign: "center",
    fontSize: "14px",
  };

  return (
    <Link to={path} type={type} style={{ ...styles }}>
      {title}
    </Link>
  );
};

export default CustomLink;
