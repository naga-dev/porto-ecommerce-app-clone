import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PageLandingHeader from "../components/PageLandingHeader";
import CustomForm from "../components/CustomForm";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/custom-button/custom-button.comp";
import { motion } from "framer-motion";
import routeMotion from "../motion/RouteMotion";
import { auth, createUserProfileDoc, sighInWithGoogle } from "../firebase";

const UserAccount = ({ user }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPpassword, setLoginPassword] = useState("");

  const [displayName, setDisplayName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle sign up
  const handleSignUp = async e => {
    e.preventDefault();

    // Check if passwords matched or not
    if (registerPassword !== confirmPassword) {
      alert("Password don't matches");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(registerEmail, registerPassword);
      await createUserProfileDoc(user, { displayName });
    } catch (error) {
      console.error(error);
    }

    // Empty all fields after submit
    setDisplayName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setConfirmPassword("");
  };

  const handleSignIn = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(loginEmail, loginPpassword);

      // Clear fields
      setLoginEmail("");
      setLoginPassword("");
    } catch (error) {
      console.log("Error While siggin in wight Email and Password", error.message);
    }
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
              <CustomForm handleSubmit={handleSignIn}>
                <CustomInput
                  type="email"
                  id="loginEmail"
                  label="DisplayName or email address"
                  name="email"
                  value={loginEmail}
                  handleChange={e => setLoginEmail(e.target.value)}
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
            <CustomForm handleSubmit={handleSignUp}>
              <CustomInput
                type="text"
                id="displayName"
                label="Display Name"
                name="displayName"
                value={displayName}
                handleChange={e => setDisplayName(e.target.value)}
              />
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
