import React, { useState } from "react";

import { addToMetamask, getAccAddress } from "../clientWeb3";
const Hero = () => {
  const [account, setAccount] = useState("");
  const [copied, setCopied] = useState(false);
  const [ccopied, setcCopied] = useState(false);
  const connect = () => {
    getAccAddress()
      .then((acc) => {
        setAccount(acc);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addmetaMask = () => {
    addToMetamask()
      .then((acc) => {
        console.log(acc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="hero" class="d-flex align-items-center">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-6 pt-3 pt-lg-0  d-flex flex-column justify-content-center">
            <h1>Welcome To ProTik Token</h1>
            <h2>My own ERC-20 Token deployed on Ropsten</h2>
            <h2>
              Contract: 0x17EeE39Bd400814168411E9109d67a4093A82492
              <span
                className="btn text-white btn-sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0x17EeE39Bd400814168411E9109d67a4093A82492"
                  );
                  setcCopied(true);
                  setCopied(false);
                }}
              >
                {ccopied ? (
                  <i class="bx bx-check bx-sm"></i>
                ) : (
                  <i class="bx bx-copy bx-sm"></i>
                )}
              </span>
              <button
                className="btn  text-white btn-outline-warning"
                onClick={() => addmetaMask()}
              >
                Add to Wallet
              </button>
            </h2>
            <div>
              {!account ? (
                <a onClick={() => connect()} class="btn-get-started scrollto">
                  Connect Wallet
                </a>
              ) : (
                <h2 className="p-4">
                  Logged in as{" "}
                  <span className="text-white ">
                    {" "}
                    {`${account.substring(0, 5)}...${account.substring(
                      35
                    )}`}{" "}
                  </span>
                  <span
                    className="btn text-white btn-sm"
                    onClick={() => {
                      navigator.clipboard.writeText(account);
                      setCopied(true);
                      setcCopied(false);
                    }}
                  >
                    {copied ? (
                      <i class="bx bx-check bx-sm"></i>
                    ) : (
                      <i class="bx bx-copy bx-sm"></i>
                    )}
                  </span>
                </h2>
              )}
            </div>
          </div>
          <div class="col-xl-6 col-lg-6  hero-img d-lg-block f-md-block d-sm-none ">
            <img
              src="https://ethereum.org/static/754d2f72ce2296fb59d9d974aeda16be/d7e82/future_transparent.webp"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};
export default Hero;
