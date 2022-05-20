import React from "react";
import "../style.css";
const Navbar = () => {
  return (
    <header id="header" class="fixed-top ">
      <div class="container  d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="index.html">ProTik</a>
          <a>+ Web 3.0</a>
        </h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#faq">
                Faqs
              </a>
            </li>
            <li>
              <a class="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
