import React from "react";

// Redux
import { connect } from "react-redux";

// Selectors
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selectors";

// Components
import ProductItem from "../product-item/ProductItem";

// JSS (Javascript in style)
const wrapperStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const title = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#302e2a",
  textTransform: "uppercase",
  fontSize: "1rem",
};

const PopularProducts = ({ shopItems }) => {
  return (
    <div className="container" style={{ marginTop: "180px" }}>
      <h3 style={title}>Popular products</h3>
      <div className="grid-content" style={wrapperStyle}>
        {shopItems.map(item => (
          <ProductItem key={item.id} item={item} {...item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopItems,
});

export default connect(mapStateToProps)(PopularProducts);
