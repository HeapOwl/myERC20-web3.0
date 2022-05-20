import Web3 from "web3";
import PTT from "./contracts/ProTikToken";
let selectedAccount;
let proTikTokenContract;
let isInitialized = false;
let web30 = {};
export const init = async () => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(`Selected account is ${selectedAccount}`);
      })
      .catch((err) => {
        console.log(err);
        return;
      });

    window.ethereum.on("accountsChanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }
  web30 = new Web3(provider);

  const networkId = await web30.eth.net.getId();
  proTikTokenContract = new web30.eth.Contract(
    PTT.abi,
    PTT.networks[networkId].address
  );

  isInitialized = true;
  return web30;
};
export const getAccAddress = async () => {
  if (!isInitialized) {
    await init();
  }

  return selectedAccount;
};

export const transferPTTs = async (to, amt) => {
  if (!isInitialized) {
    await init();
  }
  let err = { code: 4001 };
  let bal = await getMyPtts();
  if (bal > amt) {
    let x = await web30.utils.toWei(amt);
    let hash = await proTikTokenContract.methods
      .transfer(to, x)
      .send({ from: selectedAccount })
      .then((txhash) => {
        return txhash;
      })
      .catch((e) => {
        console.error(e);
        return e;
      });

    return hash;
  }
  return err;
};

export const getOwnBalance = async () => {
  if (!isInitialized) {
    await init();
  }
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    let res = await provider
      .request({
        method: "eth_getBalance",
        params: [selectedAccount, "latest"],
      })
      .then((bal) => {
        return Math.round(web30.utils.fromWei(bal) * 1000) / 1000;
      })
      .catch((e) => console.warn(e));

    return res;
  }
};

export const sendEthToAnotherAccount = async (to, amount) => {
  if (!isInitialized) {
    await init();
  }
  let provider = window.ethereum;

  const parsedAmount = await web30.utils.toHex(web30.utils.toWei(amount));

  if (typeof provider !== "undefined") {
    let txnhash = await provider.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: selectedAccount,
          to: to,

          value: parsedAmount,
        },
      ],
    });
  }
};
export const getMyPtts = async () => {
  if (!isInitialized) {
    await init();
  }

  return proTikTokenContract.methods
    .balanceOf(selectedAccount)
    .call({ from: selectedAccount })
    .then((txn) => {
      return txn / 10 ** 18;
    });
};
export const addToMetamask = async () => {
  if (!isInitialized) {
    await init();
  }

  const wasAdded = await ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: "0x17EeE39Bd400814168411E9109d67a4093A82492",
        symbol: "PTT",
        decimals: 18,
      },
    },
  });
};
