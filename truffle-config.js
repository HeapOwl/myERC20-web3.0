const HDWalletProvider = require("@truffle/hdwallet-provider");
//
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },

    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/` // +  PROJECT ID
        ),
      network_id: 3,
      gas: 5500000,
    },
  },

  compilers: {
    solc: {
      version: "0.8.13",
    },
  },
};
