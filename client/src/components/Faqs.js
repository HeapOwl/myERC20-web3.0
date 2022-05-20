import React from "react";

export default function Faqs() {
  return (
    <section id="faq" class="faq  ">
      <div class="container ">
        <div class="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            This is my first Web 3.0 Daap which uses metamask for transfering
            cryptocurrency on ropsten ( an Ethereum test net). I also created my
            own ERC-20 Token called ProTik Token (PTT){" "}
          </p>
        </div>

        <div class="faq-list">
          <ul>
            <li>
              <a class="collapse">
                {" "}
                Need Gas
                <i class="bx bx-help-circle " />
              </a>
              <div id="faq-list-1" class="collapse show">
                <p>Search Google for ethereum ropsten faucet .</p>
              </div>
            </li>

            <li>
              <a class="collapsed ">
                Need PTT
                <i class="bx bx-help-circle " />
              </a>
              <div id="faq-list-2" class="collapse show">
                <p>
                  Currently as I hold Majority of my Tokens message me
                  (insta/linkedin) your wallet address i can give some .
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
