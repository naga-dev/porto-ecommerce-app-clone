import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, EffectFade } from "swiper";

import POPULAR_PRODUCTS from "../data/popular_products";
import ProductItem from "./ProductItem";

// Import Swiper styles
import "swiper/swiper.scss";

// SwiperCore.use([Autoplay, EffectFade]);

const RelatedProductsSection = () => {
  // JSS
  const wrapper = {
    margin: "30px auto",
  };
  const title = {
    paddingBottom: "10px",
  };
  const contentWrapper = {
    borderTop: "1px solid #e7e7e7",
    paddingTop: "20px",
  };

  // Swiper config
  const swiperConfig = {
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 320px
      100: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div style={wrapper}>
      <h4 style={title}>Related Products</h4>
      <div style={contentWrapper}></div>
      <Swiper {...swiperConfig} slidesPerView={5} autoplay>
        {POPULAR_PRODUCTS.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <ProductItem {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RelatedProductsSection;
