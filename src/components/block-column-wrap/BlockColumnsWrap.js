import React from "react";

// Redux
import { connect } from "react-redux";

// Selectors
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selectors";

// Components
import BlockColumnItem from "../block-column-item/BlockColumnItem";

const BlockColumnsWrap = ({ shopItems, title }) => {
  return (
    <div>
      <h6>{title}</h6>
      {shopItems.slice(0, 3).map(item => (
        <BlockColumnItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopItems,
});

export default connect(mapStateToProps)(BlockColumnsWrap);
