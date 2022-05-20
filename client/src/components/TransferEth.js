import React, { useState } from "react";

import logo from "../images/eth-logo.png";
import { getOwnBalance, sendEthToAnotherAccount } from "../clientWeb3";
export default function TransferEth() {
  const [wallet, setWallet] = useState(-1);
  const [to, setTo] = useState("");
  const [amt, setAmt] = useState("");
  const [txn, setTxn] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const fetchBalance = () => {
    getOwnBalance()
      .then((bal) => {
        setWallet(bal);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendEthToAnother = (ra, val) => {
    setLoading(true);
    sendEthToAnotherAccount(ra, val)
      .then((bal) => {
        if (bal && "code" in bal) {
          setErr(true);
        }
        setTxn(bal.transactionHash);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeTO = (e) => {
    setTo(e.target.value);
  };
  const handleChangeAmt = (e) => {
    setAmt(e.target.value);
  };
  return (
    <section id="about" class="about bg-dark text-white">
      <div class="container ">
        <div class="row">
          <div class=" col-lg-5 ">
            <img
              src={
                "https://ethereum.org/static/0453c88b09ddaa2c7e7552840c650ad2/82fa5/finance_transparent.webp"
              }
              class="img-fluid animated"
              alt=""
            />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0   mt-5 content">
            {err && (
              <div class="alert alert-danger" role="alert">
                Something Went Wrong
              </div>
            )}
            <h1 className=" display-2 font-weight-light">Transfer Ethers</h1>
            <p class=" lead">
              Ethereum is the community-run technology powering the
              cryptocurrency ether (ETH) and thousands of decentralized
              applications.
            </p>
            <h3 className="text-white">
              {wallet != -1 ? (
                <span className="">
                  <img src={logo} alt="F" class="img-fluid " /> : {wallet} Eth
                </span>
              ) : (
                <span>
                  {" "}
                  <img src={logo} alt="F" class="img-fluid " /> : refresh
                  balance
                </span>
              )}
              <span
                className="btn  text-white p-1 m-2"
                onClick={() => fetchBalance()}
              >
                <i class="bx bx-reset bx-md"></i>
              </span>
            </h3>
            <form>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient Address 0xfef...fefe"
                    value={to}
                    onChange={handleChangeTO}
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    placeholder={`Amount in Eth 0.0001`}
                    value={amt}
                    onChange={handleChangeAmt}
                  />
                </div>
              </div>
            </form>
            <br />
            <a
              href="#"
              class="read-more"
              onClick={() => sendEthToAnother(to, amt)}
            >
              {loading ? (
                <span>
                  {" "}
                  loading
                  <i class="bx bx-loader"></i>
                </span>
              ) : (
                <span>
                  Transfer <i class="bx bx-chevrons-right"></i>
                </span>
              )}
            </a>

            {txn ? (
              <p>
                Success with transaction hash {txn}
                <span
                  className="btn btn-outline-success"
                  onClick={() =>
                    window.open(
                      `https://ropsten.etherscan.io/tx/${txn}`,
                      "_blank"
                    )
                  }
                >
                  Check on EtherScan
                </span>
              </p>
            ) : (
              <p></p>
            )}
            <br />
          </div>
          <div className="col-lg-1"></div>
        </div>
        <br />
      </div>
    </section>
  );
}
