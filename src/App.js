import React from "react";
import HomeLanding from "./components/HomeLanding";
import Navbar from "./components/Navbar";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeLanding />
    </div>
  );
}

export default App;
