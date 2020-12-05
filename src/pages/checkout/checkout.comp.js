import React, { useState } from "react";

// Components
import CartProduct from "../../components/cart-product/cart-product.comp";
import CustomButton from "../../components/custom-button/custom-button.comp";
import CustomForm from "../../components/custom-form/CustomForm";
import CustomInput from "../../components/custom-input/CustomInput";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/page-header/PageHeader";
import routeMotion from "../../motion/RouteMotion";

// Styles
import { Wrapper, SideTitle, CartTotal } from "./checkout.styles";

// Framer motion
import { motion } from "framer-motion";

// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(cartItems.lenght);

  return (
    <motion.div
      variants={routeMotion}
      initial="hidden"
      animate="visiable"
      exit="exit"
    >
      <Navbar />
      <PageHeader prev="Home" next="Shop" current="checkout" />
      <Wrapper>
        <div>
          <SideTitle>Fill Form</SideTitle>
          <CustomForm>
            <CustomInput
              type="text"
              id="username"
              label="Username"
              name="username"
              value={username}
              handleChange={e => setUsername(e.target.value)}
            />
            <CustomInput
              type="text"
              id="email"
              label="Email"
              name="email"
              value={email}
              handleChange={e => setEmail(e.target.value)}
            />
            <CustomInput
              type="password"
              id="password"
              label="Password"
              name="password"
              value={password}
              handleChange={e => setPassword(e.target.value)}
            />
            {/* type, title, backgroud, color */}
            <CustomButton
              type="submit"
              title="place order"
              backgroud="#222529"
              color="#fff"
            />
          </CustomForm>
        </div>

        <div>
          <SideTitle>Your Orders</SideTitle>

          {cartItems.length < 1 ? (
            <h4 style={{ marginBottom: "20px" }}>
              No item to compelete checkout processded,{" "}
              <Link to="/shop">Continue Shopping</Link>
            </h4>
          ) : (
            cartItems.map(item => <CartProduct key={item.id} item={item} />)
          )}

          <CartTotal>Total: ${!cartItems.lenght ? "0.00" : "400"}</CartTotal>
        </div>
      </Wrapper>
    </motion.div>
  );
};

const mapStateToProps = ({ cartSidebar: { hidden }, cart: { cartItems } }) => ({
  hidden,
  cartItems,
});

export default connect(mapStateToProps)(Checkout);
