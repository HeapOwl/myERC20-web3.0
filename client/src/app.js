import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Transfer from "./components/Transfer";
import TransferEth from "./components/TransferEth";
import Faqs from "./components/Faqs";

import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <img
        className="img xtra-img"
        src="https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/5a3c8/hero.webp"
      />

      <Hero />
      <TransferEth />
      <Transfer />
      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
