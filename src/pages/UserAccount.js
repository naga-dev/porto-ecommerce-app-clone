import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PageLandingHeader from "../components/PageLandingHeader";
import CustomForm from "../components/CustomForm";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/custom-button/custom-button.comp";

const UserAccount = () => {
  const [loginEmail, setEmail] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginPpassword, setLoginPassword] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <>
      <Navbar />
      <PageLandingHeader title="My Account" />

      <div className="user-account-from-wrapper custom-container">
        <div className="login-side">
          <h4 style={{ marginBottom: "20px" }}>Login</h4>
          <CustomForm>
            <CustomInput
              type="email"
              id="loginEmail"
              label="Username or email address"
              name="email"
              value={loginEmail}
              handleChange={e => setEmail(e.target.value)}
            />
            <CustomInput
              type="password"
              id="loginPpassword"
              label="Password"
              name="password"
              value={loginPpassword}
              handleChange={e => setLoginPassword(e.target.value)}
            />
            <CustomButton title="login" type="submit" backgroud="#222529" color="#fff" />
          </CustomForm>
        </div>
        <div className="login-side">
          <h4 style={{ marginBottom: "20px" }}>Register</h4>
          <CustomForm>
            <CustomInput
              type="email"
              id="registerEmail"
              label="Email address"
              name="email"
              value={registerEmail}
              handleChange={e => setRegisterEmail(e.target.value)}
            />
            <CustomInput
              type="password"
              id="registerPassword"
              label="Password"
              name="password"
              value={registerPassword}
              handleChange={e => setRegisterPassword(e.target.value)}
            />
            <CustomButton title="register" type="submit" backgroud="#222529" color="#fff" />
          </CustomForm>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
