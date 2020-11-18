import React, { useState } from "react";
import CartProduct from "../../components/cart-product/cart-product.comp";
import CustomButton from "../../components/custom-button/custom-button.comp";
import CustomForm from "../../components/CustomForm";
import CustomInput from "../../components/CustomInput";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";

import { Wrapper, SideTitle, CartTotal } from "./checkout.styles";

const Checkout = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
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
            <CustomButton type="submit" title="place order" backgroud="#222529" color="#fff" />
          </CustomForm>
        </div>

        <div>
          <SideTitle>About Orders</SideTitle>
          <CartProduct />
          <CartProduct />

          <CartTotal>Total: $400.00</CartTotal>
        </div>
      </Wrapper>
    </>
  );
};

export default Checkout;
