import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PageLandingHeader from "../components/PageLandingHeader";
import CustomForm from "../components/CustomForm";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/custom-button/custom-button.comp";
import { motion } from "framer-motion";
import routeMotion from "../motion/RouteMotion";
import { auth, sighInWithGoogle } from "../firebase";

const UserAccount = ({ user }) => {
  const [loginEmail, setEmail] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginPpassword, setLoginPassword] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle sign up
  const handleSignUpSubmit = async e => {
    e.preventDefault();

    // Check if passwords matched or not
    if (registerPassword !== confirmPassword) {
      alert("Password don't matches");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(registerEmail, registerPassword);
    } catch (error) {
      console.error(error);
    }

    // Empty all fields after submit
    setRegisterEmail("");
    setRegisterPassword("");
    setConfirmPassword("");
  };

  return (
    <motion.div variants={routeMotion} initial="hidden" animate="visiable" exit="exit">
      <Navbar />
      <PageLandingHeader title="My Account" />

      {user ? (
        <h1 style={{ margin: "40px 0", textAlign: "center" }}>
          Your has been logged in,{" "}
          <span style={{ cursor: "pointer", color: "red" }} onClick={() => auth.signOut()}>
            Logout
          </span>
        </h1>
      ) : (
        <div className="user-account-from-wrapper custom-container">
          <motion.div
            className="login-side"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 style={{ marginBottom: "20px" }}>Login</h4>
            <>
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
            </>
          </motion.div>

          <motion.div
            className="login-side"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, stiffness: 120 }}
          >
            <h4 style={{ marginBottom: "20px" }}>Register</h4>
            <CustomForm handleSubmit={handleSignUpSubmit}>
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
              <CustomInput
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                handleChange={e => setConfirmPassword(e.target.value)}
              />
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                Or{" "}
                <span style={{ cursor: "pointer" }} onClick={sighInWithGoogle}>
                  Google
                </span>
              </p>

              <CustomButton title="register" type="submit" backgroud="#222529" color="#fff" />
            </CustomForm>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default UserAccount;
