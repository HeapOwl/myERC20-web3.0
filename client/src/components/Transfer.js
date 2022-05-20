import React, { useState } from "react";

import { getMyPtts, transferPTTs } from "../clientWeb3";
export default function Transfer() {
  const [wallet, setWallet] = useState(-1);
  const [to, setTo] = useState("");
  const [amt, setAmt] = useState("");
  const [txn, setTxn] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const fetchBalance = () => {
    getMyPtts()
      .then((bal) => {
        setWallet(bal);
        console.log(bal);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const transferPTT = (ra, val) => {
    setLoading(true);
    transferPTTs(ra, val)
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
    <section id="about" class="about bg-secondary text-white">
      <div class="container ">
        <div class="row">
          <div class="col-lg-6 pt-4 pt-lg-0   mt-5 content">
            {err && (
              <div class="alert alert-danger" role="alert">
                Something Went Wrong
              </div>
            )}
            <h1 className=" display-2 font-weight-light">Transfer PTTs!</h1>
            <p class="display-6 lead">
              Send PTT's over the blockchain all around the world{" "}
              <i class="bx bxs-rocket"></i>
            </p>
            <h3>
              {wallet != -1 ? (
                <span className="p-0 font-weight-light">
                  <i class="bx bxs-wallet bx-lg"></i> : {wallet} PTT
                </span>
              ) : (
                <span>
                  {" "}
                  <i class="bx bxs-wallet bx-sm "></i> : please refresh balance
                </span>
              )}
              <span
                className="btn btn-outline-warning text-black p-1 m-2"
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
                    type="text"
                    class="form-control"
                    placeholder="Amount: 0.01 PTT"
                    value={amt}
                    onChange={handleChangeAmt}
                  />
                </div>
              </div>
            </form>
            <br />
            <a class="read-more" onClick={() => transferPTT(to, amt)}>
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
          <div class=" col-lg-6 ">
            <img
              src="https://ethereum.org/static/4d030a46f561e5c754cabfc1a97528ff/a5c62/impact_transparent.webp"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}
