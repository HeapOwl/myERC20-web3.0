import React from "react";
import grp from "../images/Group 1.png";
export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 footer-contact">
              <h3>ProTik Token</h3>
              <p>
                <strong>FrontEnd:</strong>
                <br /> Html <br />
                CSS + Bootstrap
                <br />
                React
                <br />
                Web3.JS
                <br />
                <br />
                <strong>BackEnd:</strong>
                <br />
                Truffle
                <br />
                Infura.io
                <br />
                Solidity
                <br />
                MetaMask
                <br />
              </p>
            </div>
            <div class="col-lg-6 col-md-6 footer-contact">
              <h3>Stack</h3>
              <img className="img xtra-img-footer" src={grp} />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright-wrap d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Prateek Rai</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">Designed inspired by ethereum</div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://www.instagram.com/prateek.py/" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://github.com/HeapOwl" class="google-plus">
              <i class="bx bxl-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/prateek-rai-a58848153"
              class="linkedin"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
