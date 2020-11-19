import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageHeader = ({ prev, current, next }) => {
  const wrapper = {
    fontSize: "11px",
    fontWeight: "600",
    alignItem: "center",
    textTransform: "uppercase",
    borderBottom: "1px solid #e7e7e7",
    paddingBottom: "15px",
    marginTop: "20px",
    marginBottom: "30px",
  };

  const div = {
    fontSize: "10px",
    margin: "0 5px",
  };
  return (
    <div className="page-header-wrapper container d-flex" style={wrapper}>
      <Link to="/">
        <span style={{ color: "#000" }}>{prev}</span>
      </Link>
      <div style={div}>
        <FaChevronRight />
      </div>
      <Link to={`/${current}`}>
        <span style={{ color: "#000" }}>{current}</span>
      </Link>
      {next && (
        <>
          <div style={div}>
            <FaChevronRight />
          </div>
          <span style={{ color: "#000" }}>{next}</span>{" "}
        </>
      )}
    </div>
  );
};

export default PageHeader;
