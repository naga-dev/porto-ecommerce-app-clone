import React from "react";

// Redux
import { connect } from "react-redux";

// Selectors
import { createStructuredSelector } from "reselect";
import { selectCategoriesItems } from "../../redux/categories/cartgories.selectors";

// Components
import ShopByCategoriesItem from "../shop-by-categories-item/ShopByCategoriesItem";

const ShopByCategories = ({ categories }) => {
  return (
    <div className="shop-by-categories-wrapper container">
      <h3 className="title">Shop By Categoreis</h3>
      <div className="category-row">
        {categories.map(item => (
          <ShopByCategoriesItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesItems,
});

export default connect(mapStateToProps)(ShopByCategories);
