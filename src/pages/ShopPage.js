import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

const ShopPage = () => {
  return (
    <>
      <Navbar />
      <PageHeader prev="home" current="shop" />
      <div className="shop-page-wrapper container">
        <div>Hello shop page</div>
      </div>
    </>
  );
};

export default ShopPage;
