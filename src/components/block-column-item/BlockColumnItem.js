import React from "react";

// Assets
import { FaStar } from "react-icons/fa";

const BlockColumnItem = ({ item }) => {
  const wrapper = {
    display: "flex",
    marginTop: "10px",
    marginBottom: "15px",
    fontSize: "14px",
  };

  const imgWrapper = {
    width: "80px",
    height: "80px",
    marginRight: "10px",
  };

  const details = {
    display: "flex",
    flexDirection: "column",
  };

  const ratingStars = {
    color: "#d7d7d7",
    marginRight: "2px",
  };
  return (
    <div style={wrapper} key={item.id}>
      <img src={item.imgUrl} alt="product" style={imgWrapper} />
      <div style={details}>
        <span style={{ textTransform: "uppercase", marginBottom: "5px" }}>
          {item.productName}
        </span>
        <div style={{ display: "felx" }}>
          <span style={ratingStars}>
            <FaStar />
          </span>
          <span style={ratingStars}>
            <FaStar />
          </span>
          <span style={ratingStars}>
            <FaStar />
          </span>
          <span style={ratingStars}>
            <FaStar />
          </span>
          <span style={ratingStars}>
            <FaStar />
          </span>
        </div>
        <span style={{ marginTop: "5px" }}>
          <b>${item.price}.00</b>
        </span>
      </div>
    </div>
  );
};

export default BlockColumnItem;
