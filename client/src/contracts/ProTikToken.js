const PTT = {
  contractName: "ProTikToken",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "tokenOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "_totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "a",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "b",
          type: "uint256",
        },
      ],
      name: "safeAdd",
      outputs: [
        {
          internalType: "uint256",
          name: "c",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "a",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "b",
          type: "uint256",
        },
      ],
      name: "safeDiv",
      outputs: [
        {
          internalType: "uint256",
          name: "c",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "a",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "b",
          type: "uint256",
        },
      ],
      name: "safeMul",
      outputs: [
        {
          internalType: "uint256",
          name: "c",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "a",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "b",
          type: "uint256",
        },
      ],
      name: "safeSub",
      outputs: [
        {
          internalType: "uint256",
          name: "c",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenOwner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenOwner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "remaining",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.8.13+commit.abaa5c0e"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"internalType":"uint256","name":"c","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"internalType":"uint256","name":"c","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"internalType":"uint256","name":"c","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"internalType":"uint256","name":"c","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{"constructor":{"notice":"Constrctor function Initializes contract with initial supply tokens to the creator of the contract"}},"version":1}},"settings":{"compilationTarget":{"project:/contracts/ProTikToken.sol":"ProTikToken"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/ProTikToken.sol":{"keccak256":"0x2ccd4ad1d6cd218e4af087e949404c30bb4539871ae956ccfd77de07459f2323","license":"UNLICENSED","urls":["bzz-raw://71c5c3bc7c2d09b37f758410a93b947004b6ae03f948970aec0bf6d7c2426870","dweb:/ipfs/QmRcfFJ9Vvs6uEevBiMSeMuGw1tgoHVnm4jjQ4D38dKPU6"]}},"version":1}',
  bytecode:
    "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020017f50726f54696b20546f6b656e0000000000000000000000000000000000000000815250600090805190602001906200005f92919062000192565b506040518060400160405280600381526020017f505454000000000000000000000000000000000000000000000000000000000081525060019080519060200190620000ad92919062000192565b506012600260006101000a81548160ff021916908360ff1602179055506a52b7d2dcc80cd2e4000000600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6003546040516200018491906200025d565b60405180910390a3620002de565b828054620001a090620002a9565b90600052602060002090601f016020900481019282620001c4576000855562000210565b82601f10620001df57805160ff191683800117855562000210565b8280016001018555821562000210579182015b828111156200020f578251825591602001919060010190620001f2565b5b5090506200021f919062000223565b5090565b5b808211156200023e57600081600090555060010162000224565b5090565b6000819050919050565b620002578162000242565b82525050565b60006020820190506200027460008301846200024c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002c257607f821691505b602082108103620002d857620002d76200027a565b5b50919050565b61106d80620002ee6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806395d89b411161008c578063b5931f7c11610066578063b5931f7c14610275578063d05c78da146102a5578063dd62ed3e146102d5578063e6cb901314610305576100ea565b806395d89b41146101f7578063a293d1e814610215578063a9059cbb14610245576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b5780633eaaf86b146101a957806370a08231146101c7576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f7610335565b6040516101049190610bd2565b60405180910390f35b61012760048036038101906101229190610c8d565b6103c3565b6040516101349190610ce8565b60405180910390f35b6101456104b5565b6040516101529190610d12565b60405180910390f35b61017560048036038101906101709190610d2d565b610509565b6040516101829190610ce8565b60405180910390f35b610193610799565b6040516101a09190610d9c565b60405180910390f35b6101b16107ac565b6040516101be9190610d12565b60405180910390f35b6101e160048036038101906101dc9190610db7565b6107b2565b6040516101ee9190610d12565b60405180910390f35b6101ff6107fb565b60405161020c9190610bd2565b60405180910390f35b61022f600480360381019061022a9190610de4565b610889565b60405161023c9190610d12565b60405180910390f35b61025f600480360381019061025a9190610c8d565b6108ac565b60405161026c9190610ce8565b60405180910390f35b61028f600480360381019061028a9190610de4565b610a35565b60405161029c9190610d12565b60405180910390f35b6102bf60048036038101906102ba9190610de4565b610a57565b6040516102cc9190610d12565b60405180910390f35b6102ef60048036038101906102ea9190610e24565b610a8f565b6040516102fc9190610d12565b60405180910390f35b61031f600480360381019061031a9190610de4565b610b16565b60405161032c9190610d12565b60405180910390f35b6000805461034290610e93565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90610e93565b80156103bb5780601f10610390576101008083540402835291602001916103bb565b820191906000526020600020905b81548152906001019060200180831161039e57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104a39190610d12565b60405180910390a36001905092915050565b6000600460008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546003546105049190610ef3565b905090565b6000610554600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610889565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061061d600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610889565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506106e6600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107869190610d12565b60405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b60035481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6001805461080890610e93565b80601f016020809104026020016040519081016040528092919081815260200182805461083490610e93565b80156108815780601f1061085657610100808354040283529160200191610881565b820191906000526020600020905b81548152906001019060200180831161086457829003601f168201915b505050505081565b60008282111561089857600080fd5b81836108a49190610ef3565b905092915050565b60006108f7600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610889565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610983600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a239190610d12565b60405180910390a36001905092915050565b6000808211610a4357600080fd5b8183610a4f9190610f56565b905092915050565b60008183610a659190610f87565b90506000831480610a805750818382610a7e9190610f56565b145b610a8957600080fd5b92915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008183610b249190610fe1565b905082811015610b3357600080fd5b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b73578082015181840152602081019050610b58565b83811115610b82576000848401525b50505050565b6000601f19601f8301169050919050565b6000610ba482610b39565b610bae8185610b44565b9350610bbe818560208601610b55565b610bc781610b88565b840191505092915050565b60006020820190508181036000830152610bec8184610b99565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c2482610bf9565b9050919050565b610c3481610c19565b8114610c3f57600080fd5b50565b600081359050610c5181610c2b565b92915050565b6000819050919050565b610c6a81610c57565b8114610c7557600080fd5b50565b600081359050610c8781610c61565b92915050565b60008060408385031215610ca457610ca3610bf4565b5b6000610cb285828601610c42565b9250506020610cc385828601610c78565b9150509250929050565b60008115159050919050565b610ce281610ccd565b82525050565b6000602082019050610cfd6000830184610cd9565b92915050565b610d0c81610c57565b82525050565b6000602082019050610d276000830184610d03565b92915050565b600080600060608486031215610d4657610d45610bf4565b5b6000610d5486828701610c42565b9350506020610d6586828701610c42565b9250506040610d7686828701610c78565b9150509250925092565b600060ff82169050919050565b610d9681610d80565b82525050565b6000602082019050610db16000830184610d8d565b92915050565b600060208284031215610dcd57610dcc610bf4565b5b6000610ddb84828501610c42565b91505092915050565b60008060408385031215610dfb57610dfa610bf4565b5b6000610e0985828601610c78565b9250506020610e1a85828601610c78565b9150509250929050565b60008060408385031215610e3b57610e3a610bf4565b5b6000610e4985828601610c42565b9250506020610e5a85828601610c42565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610eab57607f821691505b602082108103610ebe57610ebd610e64565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610efe82610c57565b9150610f0983610c57565b925082821015610f1c57610f1b610ec4565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f6182610c57565b9150610f6c83610c57565b925082610f7c57610f7b610f27565b5b828204905092915050565b6000610f9282610c57565b9150610f9d83610c57565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610fd657610fd5610ec4565b5b828202905092915050565b6000610fec82610c57565b9150610ff783610c57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561102c5761102b610ec4565b5b82820190509291505056fea264697066735822122011d4ca78f0f525a1b05179af37ce6f160dc27b0ec08c30518e2557134624aa8364736f6c634300080d0033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c806395d89b411161008c578063b5931f7c11610066578063b5931f7c14610275578063d05c78da146102a5578063dd62ed3e146102d5578063e6cb901314610305576100ea565b806395d89b41146101f7578063a293d1e814610215578063a9059cbb14610245576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b5780633eaaf86b146101a957806370a08231146101c7576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f7610335565b6040516101049190610bd2565b60405180910390f35b61012760048036038101906101229190610c8d565b6103c3565b6040516101349190610ce8565b60405180910390f35b6101456104b5565b6040516101529190610d12565b60405180910390f35b61017560048036038101906101709190610d2d565b610509565b6040516101829190610ce8565b60405180910390f35b610193610799565b6040516101a09190610d9c565b60405180910390f35b6101b16107ac565b6040516101be9190610d12565b60405180910390f35b6101e160048036038101906101dc9190610db7565b6107b2565b6040516101ee9190610d12565b60405180910390f35b6101ff6107fb565b60405161020c9190610bd2565b60405180910390f35b61022f600480360381019061022a9190610de4565b610889565b60405161023c9190610d12565b60405180910390f35b61025f600480360381019061025a9190610c8d565b6108ac565b60405161026c9190610ce8565b60405180910390f35b61028f600480360381019061028a9190610de4565b610a35565b60405161029c9190610d12565b60405180910390f35b6102bf60048036038101906102ba9190610de4565b610a57565b6040516102cc9190610d12565b60405180910390f35b6102ef60048036038101906102ea9190610e24565b610a8f565b6040516102fc9190610d12565b60405180910390f35b61031f600480360381019061031a9190610de4565b610b16565b60405161032c9190610d12565b60405180910390f35b6000805461034290610e93565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90610e93565b80156103bb5780601f10610390576101008083540402835291602001916103bb565b820191906000526020600020905b81548152906001019060200180831161039e57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104a39190610d12565b60405180910390a36001905092915050565b6000600460008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546003546105049190610ef3565b905090565b6000610554600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610889565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061061d600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610889565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506106e6600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107869190610d12565b60405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b60035481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6001805461080890610e93565b80601f016020809104026020016040519081016040528092919081815260200182805461083490610e93565b80156108815780601f1061085657610100808354040283529160200191610881565b820191906000526020600020905b81548152906001019060200180831161086457829003601f168201915b505050505081565b60008282111561089857600080fd5b81836108a49190610ef3565b905092915050565b60006108f7600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610889565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610983600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a239190610d12565b60405180910390a36001905092915050565b6000808211610a4357600080fd5b8183610a4f9190610f56565b905092915050565b60008183610a659190610f87565b90506000831480610a805750818382610a7e9190610f56565b145b610a8957600080fd5b92915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008183610b249190610fe1565b905082811015610b3357600080fd5b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b73578082015181840152602081019050610b58565b83811115610b82576000848401525b50505050565b6000601f19601f8301169050919050565b6000610ba482610b39565b610bae8185610b44565b9350610bbe818560208601610b55565b610bc781610b88565b840191505092915050565b60006020820190508181036000830152610bec8184610b99565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c2482610bf9565b9050919050565b610c3481610c19565b8114610c3f57600080fd5b50565b600081359050610c5181610c2b565b92915050565b6000819050919050565b610c6a81610c57565b8114610c7557600080fd5b50565b600081359050610c8781610c61565b92915050565b60008060408385031215610ca457610ca3610bf4565b5b6000610cb285828601610c42565b9250506020610cc385828601610c78565b9150509250929050565b60008115159050919050565b610ce281610ccd565b82525050565b6000602082019050610cfd6000830184610cd9565b92915050565b610d0c81610c57565b82525050565b6000602082019050610d276000830184610d03565b92915050565b600080600060608486031215610d4657610d45610bf4565b5b6000610d5486828701610c42565b9350506020610d6586828701610c42565b9250506040610d7686828701610c78565b9150509250925092565b600060ff82169050919050565b610d9681610d80565b82525050565b6000602082019050610db16000830184610d8d565b92915050565b600060208284031215610dcd57610dcc610bf4565b5b6000610ddb84828501610c42565b91505092915050565b60008060408385031215610dfb57610dfa610bf4565b5b6000610e0985828601610c78565b9250506020610e1a85828601610c78565b9150509250929050565b60008060408385031215610e3b57610e3a610bf4565b5b6000610e4985828601610c42565b9250506020610e5a85828601610c42565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610eab57607f821691505b602082108103610ebe57610ebd610e64565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610efe82610c57565b9150610f0983610c57565b925082821015610f1c57610f1b610ec4565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f6182610c57565b9150610f6c83610c57565b925082610f7c57610f7b610f27565b5b828204905092915050565b6000610f9282610c57565b9150610f9d83610c57565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610fd657610fd5610ec4565b5b828202905092915050565b6000610fec82610c57565b9150610ff783610c57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561102c5761102b610ec4565b5b82820190509291505056fea264697066735822122011d4ca78f0f525a1b05179af37ce6f160dc27b0ec08c30518e2557134624aa8364736f6c634300080d0033",
  immutableReferences: {},
  generatedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:951:2",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "52:32:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "62:16:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "73:5:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "62:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "34:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "44:7:2",
                type: "",
              },
            ],
            src: "7:77:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "155:53:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "172:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "195:5:2",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "177:17:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "177:24:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "165:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "165:37:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "165:37:2",
                },
              ],
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "143:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "150:3:2",
                type: "",
              },
            ],
            src: "90:118:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "312:124:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "322:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "334:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "345:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "330:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "330:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "322:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "402:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "415:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "426:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "411:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "411:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "358:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "358:71:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "358:71:2",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "284:9:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "296:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "307:4:2",
                type: "",
              },
            ],
            src: "214:222:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "470:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "487:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "490:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "480:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "480:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "480:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "584:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "587:4:2",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "577:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "577:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "577:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "608:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "611:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "601:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "601:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "601:15:2",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "442:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "679:269:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "689:22:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "703:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "709:1:2",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "699:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "699:12:2",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "689:6:2",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "720:38:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "750:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "756:1:2",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "746:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "746:12:2",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "724:18:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "797:51:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "811:27:2",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "825:6:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "833:4:2",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "821:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "821:17:2",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "811:6:2",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "777:18:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "770:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "770:26:2",
                  },
                  nodeType: "YulIf",
                  src: "767:81:2",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "900:42:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "914:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "914:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "914:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "864:18:2",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "887:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "895:2:2",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "884:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "884:14:2",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "861:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "861:38:2",
                  },
                  nodeType: "YulIf",
                  src: "858:84:2",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "663:4:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "672:6:2",
                type: "",
              },
            ],
            src: "628:320:2",
          },
        ],
      },
      contents:
        "{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
      id: 2,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:8130:2",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "66:40:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "77:22:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "93:5:2",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "87:5:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "87:12:2",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "77:6:2",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "49:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "59:6:2",
                type: "",
              },
            ],
            src: "7:99:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "208:73:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "225:3:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "230:6:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "218:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "218:19:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "218:19:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "246:29:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "265:3:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "270:4:2",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "261:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "261:14:2",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "246:11:2",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "180:3:2",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "185:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "196:11:2",
                type: "",
              },
            ],
            src: "112:169:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "336:258:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "346:10:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "355:1:2",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "350:1:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "415:63:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "440:3:2",
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "445:1:2",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "436:3:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "436:11:2",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "459:3:2",
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "464:1:2",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "455:3:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "455:11:2",
                                },
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "449:5:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "449:18:2",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "429:6:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "429:39:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "429:39:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "376:1:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "379:6:2",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "373:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "373:13:2",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "387:19:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "389:15:2",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "398:1:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "401:2:2",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "394:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "394:10:2",
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "389:1:2",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "369:3:2",
                    statements: [],
                  },
                  src: "365:113:2",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "512:76:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "562:3:2",
                                },
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "567:6:2",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "558:3:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "558:16:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "576:1:2",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "551:6:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "551:27:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "551:27:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "493:1:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "496:6:2",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "490:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "490:13:2",
                  },
                  nodeType: "YulIf",
                  src: "487:101:2",
                },
              ],
            },
            name: "copy_memory_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "318:3:2",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "323:3:2",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "328:6:2",
                type: "",
              },
            ],
            src: "287:307:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "648:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "658:38:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "676:5:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "683:2:2",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "672:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "672:14:2",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "692:2:2",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "688:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "688:7:2",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "668:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "668:28:2",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "658:6:2",
                    },
                  ],
                },
              ],
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "631:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "641:6:2",
                type: "",
              },
            ],
            src: "600:102:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "800:272:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "810:53:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "857:5:2",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "824:32:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "824:39:2",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "814:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "872:78:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "938:3:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "943:6:2",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "879:58:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "879:71:2",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "872:3:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "985:5:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "992:4:2",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "981:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "981:16:2",
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "999:3:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1004:6:2",
                      },
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "959:21:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "959:52:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "959:52:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1020:46:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1031:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1058:6:2",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "1036:21:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1036:29:2",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1027:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1027:39:2",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "1020:3:2",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "781:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "788:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "796:3:2",
                type: "",
              },
            ],
            src: "708:364:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1196:195:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1206:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1218:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1229:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1214:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1214:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1206:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1253:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1264:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1249:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1249:17:2",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "1272:4:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1278:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1268:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1268:20:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1242:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1242:47:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1242:47:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1298:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "1370:6:2",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "1379:4:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1306:63:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1306:78:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1298:4:2",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1168:9:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1180:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1191:4:2",
                type: "",
              },
            ],
            src: "1078:313:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1437:35:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1447:19:2",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1463:2:2",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "1457:5:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1457:9:2",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "1447:6:2",
                    },
                  ],
                },
              ],
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "1430:6:2",
                type: "",
              },
            ],
            src: "1397:75:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1567:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1584:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1587:1:2",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "1577:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1577:12:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1577:12:2",
                },
              ],
            },
            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            nodeType: "YulFunctionDefinition",
            src: "1478:117:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1690:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1707:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1710:1:2",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "1700:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1700:12:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1700:12:2",
                },
              ],
            },
            name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            nodeType: "YulFunctionDefinition",
            src: "1601:117:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1769:81:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1779:65:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1794:5:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1801:42:2",
                        type: "",
                        value: "0xffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "1790:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1790:54:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1779:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1751:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1761:7:2",
                type: "",
              },
            ],
            src: "1724:126:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1901:51:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1911:35:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1940:5:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "1922:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1922:24:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1911:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1883:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1893:7:2",
                type: "",
              },
            ],
            src: "1856:96:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2001:79:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2058:16:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2067:1:2",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2070:1:2",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2060:6:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2060:12:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2060:12:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "2024:5:2",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "2049:5:2",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_address",
                              nodeType: "YulIdentifier",
                              src: "2031:17:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2031:24:2",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "2021:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2021:35:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2014:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2014:43:2",
                  },
                  nodeType: "YulIf",
                  src: "2011:63:2",
                },
              ],
            },
            name: "validator_revert_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1994:5:2",
                type: "",
              },
            ],
            src: "1958:122:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2138:87:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2148:29:2",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2170:6:2",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "2157:12:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2157:20:2",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "2148:5:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2213:5:2",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_address",
                      nodeType: "YulIdentifier",
                      src: "2186:26:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2186:33:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2186:33:2",
                },
              ],
            },
            name: "abi_decode_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2116:6:2",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2124:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2132:5:2",
                type: "",
              },
            ],
            src: "2086:139:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2276:32:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2286:16:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "2297:5:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "2286:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2258:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "2268:7:2",
                type: "",
              },
            ],
            src: "2231:77:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2357:79:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2414:16:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2423:1:2",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2426:1:2",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2416:6:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2416:12:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2416:12:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "2380:5:2",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "2405:5:2",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "2387:17:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2387:24:2",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "2377:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2377:35:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2370:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2370:43:2",
                  },
                  nodeType: "YulIf",
                  src: "2367:63:2",
                },
              ],
            },
            name: "validator_revert_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2350:5:2",
                type: "",
              },
            ],
            src: "2314:122:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2494:87:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2504:29:2",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2526:6:2",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "2513:12:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2513:20:2",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "2504:5:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2569:5:2",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2542:26:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2542:33:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2542:33:2",
                },
              ],
            },
            name: "abi_decode_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2472:6:2",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2480:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2488:5:2",
                type: "",
              },
            ],
            src: "2442:139:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2670:391:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2716:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "2718:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2718:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2718:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2691:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2700:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2687:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2687:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2712:2:2",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "2683:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2683:32:2",
                  },
                  nodeType: "YulIf",
                  src: "2680:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "2809:117:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2824:15:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2838:1:2",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2828:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2853:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2888:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "2899:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2884:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2884:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2908:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "2863:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2863:53:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "2853:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "2936:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2951:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2965:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2955:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2981:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3016:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "3027:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3012:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3012:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3036:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "2991:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2991:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "2981:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2632:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "2643:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2655:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "2663:6:2",
                type: "",
              },
            ],
            src: "2587:474:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3109:48:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3119:32:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "3144:5:2",
                          },
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "3137:6:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3137:13:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "3130:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3130:21:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "3119:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_bool",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3091:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "3101:7:2",
                type: "",
              },
            ],
            src: "3067:90:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3222:50:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3239:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "3259:5:2",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_bool",
                          nodeType: "YulIdentifier",
                          src: "3244:14:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3244:21:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3232:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3232:34:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3232:34:2",
                },
              ],
            },
            name: "abi_encode_t_bool_to_t_bool_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3210:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3217:3:2",
                type: "",
              },
            ],
            src: "3163:109:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3370:118:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3380:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3392:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3403:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3388:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3388:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3380:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "3454:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3467:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3478:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3463:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3463:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_bool_to_t_bool_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3416:37:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3416:65:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3416:65:2",
                },
              ],
            },
            name: "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3342:9:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "3354:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "3365:4:2",
                type: "",
              },
            ],
            src: "3278:210:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3559:53:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3576:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "3599:5:2",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "3581:17:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3581:24:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3569:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3569:37:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3569:37:2",
                },
              ],
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3547:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3554:3:2",
                type: "",
              },
            ],
            src: "3494:118:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3716:124:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3726:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3738:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3749:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3734:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3734:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3726:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "3806:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3819:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3830:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3815:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3815:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3762:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3762:71:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3762:71:2",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3688:9:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "3700:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "3711:4:2",
                type: "",
              },
            ],
            src: "3618:222:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3946:519:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3992:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "3994:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3994:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3994:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3967:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3976:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "3963:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3963:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3988:2:2",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "3959:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3959:32:2",
                  },
                  nodeType: "YulIf",
                  src: "3956:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "4085:117:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "4100:15:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4114:1:2",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "4104:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "4129:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "4164:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "4175:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "4160:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "4160:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "4184:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "4139:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4139:53:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "4129:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "4212:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "4227:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4241:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "4231:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "4257:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "4292:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "4303:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "4288:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "4288:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "4312:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "4267:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4267:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "4257:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "4340:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "4355:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4369:2:2",
                        type: "",
                        value: "64",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "4359:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "4385:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "4420:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "4431:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "4416:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "4416:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "4440:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "4395:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4395:53:2",
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "4385:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_addresst_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3900:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "3911:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "3923:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "3931:6:2",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "3939:6:2",
                type: "",
              },
            ],
            src: "3846:619:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4514:43:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4524:27:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "4539:5:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4546:4:2",
                        type: "",
                        value: "0xff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "4535:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4535:16:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "4524:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint8",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4496:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "4506:7:2",
                type: "",
              },
            ],
            src: "4471:86:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4624:51:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "4641:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "4662:5:2",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint8",
                          nodeType: "YulIdentifier",
                          src: "4646:15:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4646:22:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4634:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4634:35:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4634:35:2",
                },
              ],
            },
            name: "abi_encode_t_uint8_to_t_uint8_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4612:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "4619:3:2",
                type: "",
              },
            ],
            src: "4563:112:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4775:120:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4785:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4797:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4808:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4793:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4793:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4785:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "4861:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4874:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4885:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4870:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4870:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint8_to_t_uint8_fromStack",
                      nodeType: "YulIdentifier",
                      src: "4821:39:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4821:67:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4821:67:2",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4747:9:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "4759:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "4770:4:2",
                type: "",
              },
            ],
            src: "4681:214:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4967:263:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5013:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "5015:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5015:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5015:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "4988:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4997:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "4984:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4984:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5009:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "4980:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4980:32:2",
                  },
                  nodeType: "YulIf",
                  src: "4977:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "5106:117:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "5121:15:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5135:1:2",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "5125:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "5150:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "5185:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "5196:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5181:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5181:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5205:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "5160:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5160:53:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "5150:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4937:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "4948:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "4960:6:2",
                type: "",
              },
            ],
            src: "4901:329:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5319:391:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5365:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "5367:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5367:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5367:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5340:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5349:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "5336:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5336:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5361:2:2",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "5332:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5332:32:2",
                  },
                  nodeType: "YulIf",
                  src: "5329:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "5458:117:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "5473:15:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5487:1:2",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "5477:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "5502:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "5537:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "5548:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5533:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5533:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5557:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "5512:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5512:53:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "5502:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "5585:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "5600:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5614:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "5604:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "5630:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "5665:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "5676:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5661:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5661:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5685:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "5640:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5640:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "5630:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_uint256t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "5281:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "5292:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "5304:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "5312:6:2",
                type: "",
              },
            ],
            src: "5236:474:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5799:391:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5845:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "5847:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5847:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5847:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5820:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5829:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "5816:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5816:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5841:2:2",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "5812:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5812:32:2",
                  },
                  nodeType: "YulIf",
                  src: "5809:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "5938:117:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "5953:15:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5967:1:2",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "5957:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "5982:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "6017:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "6028:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "6013:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6013:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "6037:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "5992:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5992:53:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "5982:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "6065:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "6080:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6094:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "6084:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "6110:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "6145:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "6156:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "6141:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6141:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "6165:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "6120:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6120:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "6110:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "5761:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "5772:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "5784:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "5792:6:2",
                type: "",
              },
            ],
            src: "5716:474:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6224:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6241:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6244:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6234:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6234:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6234:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6338:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6341:4:2",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6331:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6331:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6331:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6362:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6365:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "6355:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6355:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6355:15:2",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "6196:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6433:269:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "6443:22:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "6457:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6463:1:2",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "6453:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6453:12:2",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "6443:6:2",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "6474:38:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "6504:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6510:1:2",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "6500:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6500:12:2",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "6478:18:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6551:51:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "6565:27:2",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "6579:6:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "6587:4:2",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "6575:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6575:17:2",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "6565:6:2",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "6531:18:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "6524:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6524:26:2",
                  },
                  nodeType: "YulIf",
                  src: "6521:81:2",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6654:42:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "6668:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6668:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6668:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "6618:18:2",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "6641:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6649:2:2",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "6638:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6638:14:2",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "6615:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6615:38:2",
                  },
                  nodeType: "YulIf",
                  src: "6612:84:2",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "6417:4:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "6426:6:2",
                type: "",
              },
            ],
            src: "6382:320:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6736:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6753:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6756:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6746:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6746:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6746:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6850:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6853:4:2",
                        type: "",
                        value: "0x11",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6843:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6843:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6843:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6874:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6877:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "6867:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6867:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6867:15:2",
                },
              ],
            },
            name: "panic_error_0x11",
            nodeType: "YulFunctionDefinition",
            src: "6708:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6939:146:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "6949:25:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "6972:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "6954:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6954:20:2",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "6949:1:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "6983:25:2",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7006:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "6988:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6988:20:2",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "6983:1:2",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "7030:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "7032:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "7032:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "7032:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "7024:1:2",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7027:1:2",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "7021:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7021:8:2",
                  },
                  nodeType: "YulIf",
                  src: "7018:34:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "7062:17:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "7074:1:2",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7077:1:2",
                      },
                    ],
                    functionName: {
                      name: "sub",
                      nodeType: "YulIdentifier",
                      src: "7070:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7070:9:2",
                  },
                  variableNames: [
                    {
                      name: "diff",
                      nodeType: "YulIdentifier",
                      src: "7062:4:2",
                    },
                  ],
                },
              ],
            },
            name: "checked_sub_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "6925:1:2",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "6928:1:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "diff",
                nodeType: "YulTypedName",
                src: "6934:4:2",
                type: "",
              },
            ],
            src: "6894:191:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7119:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7136:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7139:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7129:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7129:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7129:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7233:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7236:4:2",
                        type: "",
                        value: "0x12",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7226:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7226:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7226:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7257:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7260:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "7250:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7250:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7250:15:2",
                },
              ],
            },
            name: "panic_error_0x12",
            nodeType: "YulFunctionDefinition",
            src: "7091:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7319:143:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "7329:25:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "7352:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "7334:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7334:20:2",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "7329:1:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "7363:25:2",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7386:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "7368:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7368:20:2",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "7363:1:2",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "7410:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x12",
                            nodeType: "YulIdentifier",
                            src: "7412:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "7412:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "7412:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7407:1:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "7400:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7400:9:2",
                  },
                  nodeType: "YulIf",
                  src: "7397:35:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "7442:14:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "7451:1:2",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7454:1:2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "7447:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7447:9:2",
                  },
                  variableNames: [
                    {
                      name: "r",
                      nodeType: "YulIdentifier",
                      src: "7442:1:2",
                    },
                  ],
                },
              ],
            },
            name: "checked_div_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "7308:1:2",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "7311:1:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "r",
                nodeType: "YulTypedName",
                src: "7317:1:2",
                type: "",
              },
            ],
            src: "7277:185:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7516:300:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "7526:25:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "7549:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "7531:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7531:20:2",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "7526:1:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "7560:25:2",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7583:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "7565:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7565:20:2",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "7560:1:2",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "7758:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "7760:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "7760:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "7760:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "7670:1:2",
                              },
                            ],
                            functionName: {
                              name: "iszero",
                              nodeType: "YulIdentifier",
                              src: "7663:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7663:9:2",
                          },
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "7656:6:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7656:17:2",
                      },
                      {
                        arguments: [
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "7678:1:2",
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "7685:66:2",
                                type: "",
                                value:
                                  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                              },
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "7753:1:2",
                              },
                            ],
                            functionName: {
                              name: "div",
                              nodeType: "YulIdentifier",
                              src: "7681:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7681:74:2",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "7675:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7675:81:2",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "7652:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7652:105:2",
                  },
                  nodeType: "YulIf",
                  src: "7649:131:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "7790:20:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "7805:1:2",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7808:1:2",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "7801:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7801:9:2",
                  },
                  variableNames: [
                    {
                      name: "product",
                      nodeType: "YulIdentifier",
                      src: "7790:7:2",
                    },
                  ],
                },
              ],
            },
            name: "checked_mul_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "7499:1:2",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "7502:1:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "product",
                nodeType: "YulTypedName",
                src: "7508:7:2",
                type: "",
              },
            ],
            src: "7468:348:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7866:261:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "7876:25:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "7899:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "7881:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7881:20:2",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "7876:1:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "7910:25:2",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "7933:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "7915:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7915:20:2",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "7910:1:2",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "8073:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "8075:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "8075:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "8075:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "7994:1:2",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "8001:66:2",
                            type: "",
                            value:
                              "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                          },
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "8069:1:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "7997:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7997:74:2",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "7991:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7991:81:2",
                  },
                  nodeType: "YulIf",
                  src: "7988:107:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "8105:16:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "8116:1:2",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "8119:1:2",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "8112:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "8112:9:2",
                  },
                  variableNames: [
                    {
                      name: "sum",
                      nodeType: "YulIdentifier",
                      src: "8105:3:2",
                    },
                  ],
                },
              ],
            },
            name: "checked_add_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "7853:1:2",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "7856:1:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "sum",
                nodeType: "YulTypedName",
                src: "7862:3:2",
                type: "",
              },
            ],
            src: "7822:305:2",
          },
        ],
      },
      contents:
        "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256t_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n}\n",
      id: 2,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap:
    "1998:2287:1:-:0;;;2488:273;;;;;;;;;;2520:21;;;;;;;;;;;;;;;;;:4;:21;;;;;;;;;;;;:::i;:::-;;2552:14;;;;;;;;;;;;;;;;;:6;:14;;;;;;;;;;;;:::i;:::-;;2588:2;2577:8;;:13;;;;;;;;;;;;;;;;;;2616:27;2601:12;:42;;;;2679:12;;2656:8;:20;2665:10;2656:20;;;;;;;;;;;;;;;:35;;;;2728:10;2707:46;;2724:1;2707:46;;;2740:12;;2707:46;;;;;;:::i;:::-;;;;;;;;1998:2287;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:77:2:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;442:180::-;490:77;487:1;480:88;587:4;584:1;577:15;611:4;608:1;601:15;628:320;672:6;709:1;703:4;699:12;689:22;;756:1;750:4;746:12;777:18;767:81;;833:4;825:6;821:17;811:27;;767:81;895:2;887:6;884:14;864:18;861:38;858:84;;914:18;;:::i;:::-;858:84;679:269;628:320;;;:::o;1998:2287:1:-;;;;;;;",
  deployedSourceMap:
    "1998:2287:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2054:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3289:252;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2769:123;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3878:404;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2106:21;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2204:27;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2900:173;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2079:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1587:125;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3549:321;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1867:124;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1720:139;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3081:200;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1454:125;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2054:18;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3289:252::-;3391:12;3452:6;3421:7;:19;3429:10;3421:19;;;;;;;;;;;;;;;:28;3441:7;3421:28;;;;;;;;;;;;;;;:37;;;;3495:7;3474:37;;3483:10;3474:37;;;3504:6;3474:37;;;;;;:::i;:::-;;;;;;;;3529:4;3522:11;;3289:252;;;;:::o;2769:123::-;2822:7;2864:8;:20;2881:1;2864:20;;;;;;;;;;;;;;;;2849:12;;:35;;;;:::i;:::-;2842:42;;2769:123;:::o;3878:404::-;4001:12;4043:31;4051:8;:14;4060:4;4051:14;;;;;;;;;;;;;;;;4067:6;4043:7;:31::i;:::-;4026:8;:14;4035:4;4026:14;;;;;;;;;;;;;;;:48;;;;4113:42;4121:7;:13;4129:4;4121:13;;;;;;;;;;;;;;;:25;4135:10;4121:25;;;;;;;;;;;;;;;;4148:6;4113:7;:42::i;:::-;4085:7;:13;4093:4;4085:13;;;;;;;;;;;;;;;:25;4099:10;4085:25;;;;;;;;;;;;;;;:70;;;;4181:29;4189:8;:12;4198:2;4189:12;;;;;;;;;;;;;;;;4203:6;4181:7;:29::i;:::-;4166:8;:12;4175:2;4166:12;;;;;;;;;;;;;;;:44;;;;4241:2;4226:26;;4235:4;4226:26;;;4245:6;4226:26;;;;;;:::i;:::-;;;;;;;;4270:4;4263:11;;3878:404;;;;;:::o;2106:21::-;;;;;;;;;;;;;:::o;2204:27::-;;;;:::o;2900:173::-;3005:15;3045:8;:20;3054:10;3045:20;;;;;;;;;;;;;;;;3038:27;;2900:173;;;:::o;2079:20::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1587:125::-;1647:9;1682:1;1677;:6;;1669:15;;;;;;1703:1;1699;:5;;;;:::i;:::-;1695:9;;1587:125;;;;:::o;3549:321::-;3647:12;3700:37;3708:8;:20;3717:10;3708:20;;;;;;;;;;;;;;;;3730:6;3700:7;:37::i;:::-;3677:8;:20;3686:10;3677:20;;;;;;;;;;;;;;;:60;;;;3763:29;3771:8;:12;3780:2;3771:12;;;;;;;;;;;;;;;;3785:6;3763:7;:29::i;:::-;3748:8;:12;3757:2;3748:12;;;;;;;;;;;;;;;:44;;;;3829:2;3808:32;;3817:10;3808:32;;;3833:6;3808:32;;;;;;:::i;:::-;;;;;;;;3858:4;3851:11;;3549:321;;;;:::o;1867:124::-;1927:9;1961:1;1957;:5;1949:14;;;;;;1982:1;1978;:5;;;;:::i;:::-;1974:9;;1867:124;;;;:::o;1720:139::-;1780:9;1810:1;1806;:5;;;;:::i;:::-;1802:9;;1835:1;1830;:6;:20;;;;1849:1;1844;1840;:5;;;;:::i;:::-;:10;1830:20;1822:29;;;;;;1720:139;;;;:::o;3081:200::-;3203:17;3245:7;:19;3253:10;3245:19;;;;;;;;;;;;;;;:28;3265:7;3245:28;;;;;;;;;;;;;;;;3238:35;;3081:200;;;;:::o;1454:125::-;1514:9;1544:1;1540;:5;;;;:::i;:::-;1536:9;;1569:1;1564;:6;;1556:15;;;;;;1454:125;;;;:::o;7:99:2:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:307::-;355:1;365:113;379:6;376:1;373:13;365:113;;;464:1;459:3;455:11;449:18;445:1;440:3;436:11;429:39;401:2;398:1;394:10;389:15;;365:113;;;496:6;493:1;490:13;487:101;;;576:1;567:6;562:3;558:16;551:27;487:101;336:258;287:307;;;:::o;600:102::-;641:6;692:2;688:7;683:2;676:5;672:14;668:28;658:38;;600:102;;;:::o;708:364::-;796:3;824:39;857:5;824:39;:::i;:::-;879:71;943:6;938:3;879:71;:::i;:::-;872:78;;959:52;1004:6;999:3;992:4;985:5;981:16;959:52;:::i;:::-;1036:29;1058:6;1036:29;:::i;:::-;1031:3;1027:39;1020:46;;800:272;708:364;;;;:::o;1078:313::-;1191:4;1229:2;1218:9;1214:18;1206:26;;1278:9;1272:4;1268:20;1264:1;1253:9;1249:17;1242:47;1306:78;1379:4;1370:6;1306:78;:::i;:::-;1298:86;;1078:313;;;;:::o;1478:117::-;1587:1;1584;1577:12;1724:126;1761:7;1801:42;1794:5;1790:54;1779:65;;1724:126;;;:::o;1856:96::-;1893:7;1922:24;1940:5;1922:24;:::i;:::-;1911:35;;1856:96;;;:::o;1958:122::-;2031:24;2049:5;2031:24;:::i;:::-;2024:5;2021:35;2011:63;;2070:1;2067;2060:12;2011:63;1958:122;:::o;2086:139::-;2132:5;2170:6;2157:20;2148:29;;2186:33;2213:5;2186:33;:::i;:::-;2086:139;;;;:::o;2231:77::-;2268:7;2297:5;2286:16;;2231:77;;;:::o;2314:122::-;2387:24;2405:5;2387:24;:::i;:::-;2380:5;2377:35;2367:63;;2426:1;2423;2416:12;2367:63;2314:122;:::o;2442:139::-;2488:5;2526:6;2513:20;2504:29;;2542:33;2569:5;2542:33;:::i;:::-;2442:139;;;;:::o;2587:474::-;2655:6;2663;2712:2;2700:9;2691:7;2687:23;2683:32;2680:119;;;2718:79;;:::i;:::-;2680:119;2838:1;2863:53;2908:7;2899:6;2888:9;2884:22;2863:53;:::i;:::-;2853:63;;2809:117;2965:2;2991:53;3036:7;3027:6;3016:9;3012:22;2991:53;:::i;:::-;2981:63;;2936:118;2587:474;;;;;:::o;3067:90::-;3101:7;3144:5;3137:13;3130:21;3119:32;;3067:90;;;:::o;3163:109::-;3244:21;3259:5;3244:21;:::i;:::-;3239:3;3232:34;3163:109;;:::o;3278:210::-;3365:4;3403:2;3392:9;3388:18;3380:26;;3416:65;3478:1;3467:9;3463:17;3454:6;3416:65;:::i;:::-;3278:210;;;;:::o;3494:118::-;3581:24;3599:5;3581:24;:::i;:::-;3576:3;3569:37;3494:118;;:::o;3618:222::-;3711:4;3749:2;3738:9;3734:18;3726:26;;3762:71;3830:1;3819:9;3815:17;3806:6;3762:71;:::i;:::-;3618:222;;;;:::o;3846:619::-;3923:6;3931;3939;3988:2;3976:9;3967:7;3963:23;3959:32;3956:119;;;3994:79;;:::i;:::-;3956:119;4114:1;4139:53;4184:7;4175:6;4164:9;4160:22;4139:53;:::i;:::-;4129:63;;4085:117;4241:2;4267:53;4312:7;4303:6;4292:9;4288:22;4267:53;:::i;:::-;4257:63;;4212:118;4369:2;4395:53;4440:7;4431:6;4420:9;4416:22;4395:53;:::i;:::-;4385:63;;4340:118;3846:619;;;;;:::o;4471:86::-;4506:7;4546:4;4539:5;4535:16;4524:27;;4471:86;;;:::o;4563:112::-;4646:22;4662:5;4646:22;:::i;:::-;4641:3;4634:35;4563:112;;:::o;4681:214::-;4770:4;4808:2;4797:9;4793:18;4785:26;;4821:67;4885:1;4874:9;4870:17;4861:6;4821:67;:::i;:::-;4681:214;;;;:::o;4901:329::-;4960:6;5009:2;4997:9;4988:7;4984:23;4980:32;4977:119;;;5015:79;;:::i;:::-;4977:119;5135:1;5160:53;5205:7;5196:6;5185:9;5181:22;5160:53;:::i;:::-;5150:63;;5106:117;4901:329;;;;:::o;5236:474::-;5304:6;5312;5361:2;5349:9;5340:7;5336:23;5332:32;5329:119;;;5367:79;;:::i;:::-;5329:119;5487:1;5512:53;5557:7;5548:6;5537:9;5533:22;5512:53;:::i;:::-;5502:63;;5458:117;5614:2;5640:53;5685:7;5676:6;5665:9;5661:22;5640:53;:::i;:::-;5630:63;;5585:118;5236:474;;;;;:::o;5716:::-;5784:6;5792;5841:2;5829:9;5820:7;5816:23;5812:32;5809:119;;;5847:79;;:::i;:::-;5809:119;5967:1;5992:53;6037:7;6028:6;6017:9;6013:22;5992:53;:::i;:::-;5982:63;;5938:117;6094:2;6120:53;6165:7;6156:6;6145:9;6141:22;6120:53;:::i;:::-;6110:63;;6065:118;5716:474;;;;;:::o;6196:180::-;6244:77;6241:1;6234:88;6341:4;6338:1;6331:15;6365:4;6362:1;6355:15;6382:320;6426:6;6463:1;6457:4;6453:12;6443:22;;6510:1;6504:4;6500:12;6531:18;6521:81;;6587:4;6579:6;6575:17;6565:27;;6521:81;6649:2;6641:6;6638:14;6618:18;6615:38;6612:84;;6668:18;;:::i;:::-;6612:84;6433:269;6382:320;;;:::o;6708:180::-;6756:77;6753:1;6746:88;6853:4;6850:1;6843:15;6877:4;6874:1;6867:15;6894:191;6934:4;6954:20;6972:1;6954:20;:::i;:::-;6949:25;;6988:20;7006:1;6988:20;:::i;:::-;6983:25;;7027:1;7024;7021:8;7018:34;;;7032:18;;:::i;:::-;7018:34;7077:1;7074;7070:9;7062:17;;6894:191;;;;:::o;7091:180::-;7139:77;7136:1;7129:88;7236:4;7233:1;7226:15;7260:4;7257:1;7250:15;7277:185;7317:1;7334:20;7352:1;7334:20;:::i;:::-;7329:25;;7368:20;7386:1;7368:20;:::i;:::-;7363:25;;7407:1;7397:35;;7412:18;;:::i;:::-;7397:35;7454:1;7451;7447:9;7442:14;;7277:185;;;;:::o;7468:348::-;7508:7;7531:20;7549:1;7531:20;:::i;:::-;7526:25;;7565:20;7583:1;7565:20;:::i;:::-;7560:25;;7753:1;7685:66;7681:74;7678:1;7675:81;7670:1;7663:9;7656:17;7652:105;7649:131;;;7760:18;;:::i;:::-;7649:131;7808:1;7805;7801:9;7790:20;;7468:348;;;;:::o;7822:305::-;7862:3;7881:20;7899:1;7881:20;:::i;:::-;7876:25;;7915:20;7933:1;7915:20;:::i;:::-;7910:25;;8069:1;8001:66;7997:74;7994:1;7991:81;7988:107;;;8075:18;;:::i;:::-;7988:107;8119:1;8116;8112:9;8105:16;;7822:305;;;;:::o",
  source:
    '//SPDX-License-Identifier: UNLICENSED\r\npragma solidity >0.5.0;\r\n\r\n// ----------------------------------------------------------------------------\r\n// ERC Token Standard #20 Interface\r\n//\r\n// ----------------------------------------------------------------------------\r\nabstract contract ERC20Interface {\r\n    function totalSupply() public view virtual returns (uint256);\r\n\r\n    function balanceOf(address tokenOwner)\r\n        public\r\n        view\r\n        virtual\r\n        returns (uint256 balance);\r\n\r\n    function allowance(address tokenOwner, address spender)\r\n        public\r\n        view\r\n        virtual\r\n        returns (uint256 remaining);\r\n\r\n    function transfer(address to, uint256 tokens)\r\n        public\r\n        virtual\r\n        returns (bool success);\r\n\r\n    function approve(address spender, uint256 tokens)\r\n        public\r\n        virtual\r\n        returns (bool success);\r\n\r\n    function transferFrom(\r\n        address from,\r\n        address to,\r\n        uint256 tokens\r\n    ) public virtual returns (bool success);\r\n\r\n    event Transfer(address indexed from, address indexed to, uint256 tokens);\r\n    event Approval(\r\n        address indexed tokenOwner,\r\n        address indexed spender,\r\n        uint256 tokens\r\n    );\r\n}\r\n\r\n// ----------------------------------------------------------------------------\r\n// Safe Math Library\r\n// ----------------------------------------------------------------------------\r\ncontract SafeMath {\r\n    function safeAdd(uint256 a, uint256 b) public pure returns (uint256 c) {\r\n        c = a + b;\r\n        require(c >= a);\r\n    }\r\n\r\n    function safeSub(uint256 a, uint256 b) public pure returns (uint256 c) {\r\n        require(b <= a);\r\n        c = a - b;\r\n    }\r\n\r\n    function safeMul(uint256 a, uint256 b) public pure returns (uint256 c) {\r\n        c = a * b;\r\n        require(a == 0 || c / a == b);\r\n    }\r\n\r\n    function safeDiv(uint256 a, uint256 b) public pure returns (uint256 c) {\r\n        require(b > 0);\r\n        c = a / b;\r\n    }\r\n}\r\n\r\ncontract ProTikToken is ERC20Interface, SafeMath {\r\n    string public name;\r\n    string public symbol;\r\n    uint8 public decimals; // 18 decimals is the strongly suggested default, avoid changing it\r\n\r\n    uint256 public _totalSupply;\r\n\r\n    mapping(address => uint256) balances;\r\n    mapping(address => mapping(address => uint256)) allowed;\r\n\r\n    /**\r\n     * Constrctor function\r\n     *\r\n     * Initializes contract with initial supply tokens to the creator of the contract\r\n     */\r\n    constructor() public {\r\n        name = "ProTik Token";\r\n        symbol = "PTT";\r\n        decimals = 18;\r\n        _totalSupply = 100000000000000000000000000;\r\n\r\n        balances[msg.sender] = _totalSupply;\r\n        emit Transfer(address(0), msg.sender, _totalSupply);\r\n    }\r\n\r\n    function totalSupply() public view override returns (uint256) {\r\n        return _totalSupply - balances[address(0)];\r\n    }\r\n\r\n    function balanceOf(address tokenOwner)\r\n        public\r\n        view\r\n        override\r\n        returns (uint256 balance)\r\n    {\r\n        return balances[tokenOwner];\r\n    }\r\n\r\n    function allowance(address tokenOwner, address spender)\r\n        public\r\n        view\r\n        override\r\n        returns (uint256 remaining)\r\n    {\r\n        return allowed[tokenOwner][spender];\r\n    }\r\n\r\n    function approve(address spender, uint256 tokens)\r\n        public\r\n        override\r\n        returns (bool success)\r\n    {\r\n        allowed[msg.sender][spender] = tokens;\r\n        emit Approval(msg.sender, spender, tokens);\r\n        return true;\r\n    }\r\n\r\n    function transfer(address to, uint256 tokens)\r\n        public\r\n        override\r\n        returns (bool success)\r\n    {\r\n        balances[msg.sender] = safeSub(balances[msg.sender], tokens);\r\n        balances[to] = safeAdd(balances[to], tokens);\r\n        emit Transfer(msg.sender, to, tokens);\r\n        return true;\r\n    }\r\n\r\n    function transferFrom(\r\n        address from,\r\n        address to,\r\n        uint256 tokens\r\n    ) public override returns (bool success) {\r\n        balances[from] = safeSub(balances[from], tokens);\r\n        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);\r\n        balances[to] = safeAdd(balances[to], tokens);\r\n        emit Transfer(from, to, tokens);\r\n        return true;\r\n    }\r\n}\r\n',
  sourcePath:
    "C:\\Users\\Mr. P\\Desktop\\New folder\\myERC20\\contracts\\ProTikToken.sol",
  ast: {
    absolutePath: "project:/contracts/ProTikToken.sol",
    exportedSymbols: {
      ERC20Interface: [101],
      ProTikToken: [436],
      SafeMath: [196],
    },
    id: 437,
    license: "UNLICENSED",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 34,
        literals: ["solidity", ">", "0.5", ".0"],
        nodeType: "PragmaDirective",
        src: "39:23:1",
      },
      {
        abstract: true,
        baseContracts: [],
        canonicalName: "ERC20Interface",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: false,
        id: 101,
        linearizedBaseContracts: [101],
        name: "ERC20Interface",
        nameLocation: "287:14:1",
        nodeType: "ContractDefinition",
        nodes: [
          {
            functionSelector: "18160ddd",
            id: 39,
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "totalSupply",
            nameLocation: "318:11:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 35,
              nodeType: "ParameterList",
              parameters: [],
              src: "329:2:1",
            },
            returnParameters: {
              id: 38,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 37,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 39,
                  src: "361:7:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 36,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "361:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "360:9:1",
            },
            scope: 101,
            src: "309:61:1",
            stateMutability: "view",
            virtual: true,
            visibility: "public",
          },
          {
            functionSelector: "70a08231",
            id: 46,
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "balanceOf",
            nameLocation: "387:9:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 42,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 41,
                  mutability: "mutable",
                  name: "tokenOwner",
                  nameLocation: "405:10:1",
                  nodeType: "VariableDeclaration",
                  scope: 46,
                  src: "397:18:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 40,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "397:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "396:20:1",
            },
            returnParameters: {
              id: 45,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 44,
                  mutability: "mutable",
                  name: "balance",
                  nameLocation: "490:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 46,
                  src: "482:15:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 43,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "482:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "481:17:1",
            },
            scope: 101,
            src: "378:121:1",
            stateMutability: "view",
            virtual: true,
            visibility: "public",
          },
          {
            functionSelector: "dd62ed3e",
            id: 55,
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "allowance",
            nameLocation: "516:9:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 51,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 48,
                  mutability: "mutable",
                  name: "tokenOwner",
                  nameLocation: "534:10:1",
                  nodeType: "VariableDeclaration",
                  scope: 55,
                  src: "526:18:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 47,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "526:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 50,
                  mutability: "mutable",
                  name: "spender",
                  nameLocation: "554:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 55,
                  src: "546:15:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 49,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "546:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "525:37:1",
            },
            returnParameters: {
              id: 54,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 53,
                  mutability: "mutable",
                  name: "remaining",
                  nameLocation: "636:9:1",
                  nodeType: "VariableDeclaration",
                  scope: 55,
                  src: "628:17:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 52,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "628:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "627:19:1",
            },
            scope: 101,
            src: "507:140:1",
            stateMutability: "view",
            virtual: true,
            visibility: "public",
          },
          {
            functionSelector: "a9059cbb",
            id: 64,
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "transfer",
            nameLocation: "664:8:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 60,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 57,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "681:2:1",
                  nodeType: "VariableDeclaration",
                  scope: 64,
                  src: "673:10:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 56,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "673:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 59,
                  mutability: "mutable",
                  name: "tokens",
                  nameLocation: "693:6:1",
                  nodeType: "VariableDeclaration",
                  scope: 64,
                  src: "685:14:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 58,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "685:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "672:28:1",
            },
            returnParameters: {
              id: 63,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 62,
                  mutability: "mutable",
                  name: "success",
                  nameLocation: "757:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 64,
                  src: "752:12:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 61,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "752:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "751:14:1",
            },
            scope: 101,
            src: "655:111:1",
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "public",
          },
          {
            functionSelector: "095ea7b3",
            id: 73,
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "approve",
            nameLocation: "783:7:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 69,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 66,
                  mutability: "mutable",
                  name: "spender",
                  nameLocation: "799:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 73,
                  src: "791:15:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 65,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "791:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 68,
                  mutability: "mutable",
                  name: "tokens",
                  nameLocation: "816:6:1",
                  nodeType: "VariableDeclaration",
                  scope: 73,
                  src: "808:14:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 67,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "808:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "790:33:1",
            },
            returnParameters: {
              id: 72,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 71,
                  mutability: "mutable",
                  name: "success",
                  nameLocation: "880:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 73,
                  src: "875:12:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 70,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "875:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "874:14:1",
            },
            scope: 101,
            src: "774:115:1",
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "public",
          },
          {
            functionSelector: "23b872dd",
            id: 84,
            implemented: false,
            kind: "function",
            modifiers: [],
            name: "transferFrom",
            nameLocation: "906:12:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 80,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 75,
                  mutability: "mutable",
                  name: "from",
                  nameLocation: "937:4:1",
                  nodeType: "VariableDeclaration",
                  scope: 84,
                  src: "929:12:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 74,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "929:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 77,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "960:2:1",
                  nodeType: "VariableDeclaration",
                  scope: 84,
                  src: "952:10:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 76,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "952:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 79,
                  mutability: "mutable",
                  name: "tokens",
                  nameLocation: "981:6:1",
                  nodeType: "VariableDeclaration",
                  scope: 84,
                  src: "973:14:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 78,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "973:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "918:76:1",
            },
            returnParameters: {
              id: 83,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 82,
                  mutability: "mutable",
                  name: "success",
                  nameLocation: "1024:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 84,
                  src: "1019:12:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 81,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "1019:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1018:14:1",
            },
            scope: 101,
            src: "897:136:1",
            stateMutability: "nonpayable",
            virtual: true,
            visibility: "public",
          },
          {
            anonymous: false,
            eventSelector:
              "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            id: 92,
            name: "Transfer",
            nameLocation: "1047:8:1",
            nodeType: "EventDefinition",
            parameters: {
              id: 91,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 86,
                  indexed: true,
                  mutability: "mutable",
                  name: "from",
                  nameLocation: "1072:4:1",
                  nodeType: "VariableDeclaration",
                  scope: 92,
                  src: "1056:20:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 85,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1056:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 88,
                  indexed: true,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "1094:2:1",
                  nodeType: "VariableDeclaration",
                  scope: 92,
                  src: "1078:18:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 87,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1078:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 90,
                  indexed: false,
                  mutability: "mutable",
                  name: "tokens",
                  nameLocation: "1106:6:1",
                  nodeType: "VariableDeclaration",
                  scope: 92,
                  src: "1098:14:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 89,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1098:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1055:58:1",
            },
            src: "1041:73:1",
          },
          {
            anonymous: false,
            eventSelector:
              "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            id: 100,
            name: "Approval",
            nameLocation: "1126:8:1",
            nodeType: "EventDefinition",
            parameters: {
              id: 99,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 94,
                  indexed: true,
                  mutability: "mutable",
                  name: "tokenOwner",
                  nameLocation: "1161:10:1",
                  nodeType: "VariableDeclaration",
                  scope: 100,
                  src: "1145:26:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 93,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1145:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 96,
                  indexed: true,
                  mutability: "mutable",
                  name: "spender",
                  nameLocation: "1198:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 100,
                  src: "1182:23:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 95,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1182:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 98,
                  indexed: false,
                  mutability: "mutable",
                  name: "tokens",
                  nameLocation: "1224:6:1",
                  nodeType: "VariableDeclaration",
                  scope: 100,
                  src: "1216:14:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 97,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1216:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1134:103:1",
            },
            src: "1120:118:1",
          },
        ],
        scope: 437,
        src: "269:972:1",
        usedErrors: [],
      },
      {
        abstract: false,
        baseContracts: [],
        canonicalName: "SafeMath",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 196,
        linearizedBaseContracts: [196],
        name: "SafeMath",
        nameLocation: "1438:8:1",
        nodeType: "ContractDefinition",
        nodes: [
          {
            body: {
              id: 122,
              nodeType: "Block",
              src: "1525:54:1",
              statements: [
                {
                  expression: {
                    id: 114,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 110,
                      name: "c",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 108,
                      src: "1536:1:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 113,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        id: 111,
                        name: "a",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 103,
                        src: "1540:1:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "+",
                      rightExpression: {
                        id: 112,
                        name: "b",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 105,
                        src: "1544:1:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1540:5:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "1536:9:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 115,
                  nodeType: "ExpressionStatement",
                  src: "1536:9:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 119,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 117,
                          name: "c",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 108,
                          src: "1564:1:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: ">=",
                        rightExpression: {
                          id: 118,
                          name: "a",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 103,
                          src: "1569:1:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "1564:6:1",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 116,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "1556:7:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 120,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1556:15:1",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 121,
                  nodeType: "ExpressionStatement",
                  src: "1556:15:1",
                },
              ],
            },
            functionSelector: "e6cb9013",
            id: 123,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "safeAdd",
            nameLocation: "1463:7:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 106,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 103,
                  mutability: "mutable",
                  name: "a",
                  nameLocation: "1479:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 123,
                  src: "1471:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 102,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1471:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 105,
                  mutability: "mutable",
                  name: "b",
                  nameLocation: "1490:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 123,
                  src: "1482:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 104,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1482:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1470:22:1",
            },
            returnParameters: {
              id: 109,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 108,
                  mutability: "mutable",
                  name: "c",
                  nameLocation: "1522:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 123,
                  src: "1514:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 107,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1514:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1513:11:1",
            },
            scope: 196,
            src: "1454:125:1",
            stateMutability: "pure",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 144,
              nodeType: "Block",
              src: "1658:54:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 135,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 133,
                          name: "b",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 127,
                          src: "1677:1:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "<=",
                        rightExpression: {
                          id: 134,
                          name: "a",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 125,
                          src: "1682:1:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "1677:6:1",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 132,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "1669:7:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 136,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1669:15:1",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 137,
                  nodeType: "ExpressionStatement",
                  src: "1669:15:1",
                },
                {
                  expression: {
                    id: 142,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 138,
                      name: "c",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 130,
                      src: "1695:1:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 141,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        id: 139,
                        name: "a",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 125,
                        src: "1699:1:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "-",
                      rightExpression: {
                        id: 140,
                        name: "b",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 127,
                        src: "1703:1:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1699:5:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "1695:9:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 143,
                  nodeType: "ExpressionStatement",
                  src: "1695:9:1",
                },
              ],
            },
            functionSelector: "a293d1e8",
            id: 145,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "safeSub",
            nameLocation: "1596:7:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 128,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 125,
                  mutability: "mutable",
                  name: "a",
                  nameLocation: "1612:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 145,
                  src: "1604:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 124,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1604:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 127,
                  mutability: "mutable",
                  name: "b",
                  nameLocation: "1623:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 145,
                  src: "1615:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 126,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1615:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1603:22:1",
            },
            returnParameters: {
              id: 131,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 130,
                  mutability: "mutable",
                  name: "c",
                  nameLocation: "1655:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 145,
                  src: "1647:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 129,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1647:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1646:11:1",
            },
            scope: 196,
            src: "1587:125:1",
            stateMutability: "pure",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 172,
              nodeType: "Block",
              src: "1791:68:1",
              statements: [
                {
                  expression: {
                    id: 158,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 154,
                      name: "c",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 152,
                      src: "1802:1:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 157,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        id: 155,
                        name: "a",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 147,
                        src: "1806:1:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "*",
                      rightExpression: {
                        id: 156,
                        name: "b",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 149,
                        src: "1810:1:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1806:5:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "1802:9:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 159,
                  nodeType: "ExpressionStatement",
                  src: "1802:9:1",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        id: 169,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 163,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 161,
                            name: "a",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 147,
                            src: "1830:1:1",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            hexValue: "30",
                            id: 162,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "1835:1:1",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          src: "1830:6:1",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "||",
                        rightExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 168,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            commonType: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            id: 166,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 164,
                              name: "c",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 152,
                              src: "1840:1:1",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            nodeType: "BinaryOperation",
                            operator: "/",
                            rightExpression: {
                              id: 165,
                              name: "a",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 147,
                              src: "1844:1:1",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            src: "1840:5:1",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            id: 167,
                            name: "b",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 149,
                            src: "1849:1:1",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "1840:10:1",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        src: "1830:20:1",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 160,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "1822:7:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 170,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1822:29:1",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 171,
                  nodeType: "ExpressionStatement",
                  src: "1822:29:1",
                },
              ],
            },
            functionSelector: "d05c78da",
            id: 173,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "safeMul",
            nameLocation: "1729:7:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 150,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 147,
                  mutability: "mutable",
                  name: "a",
                  nameLocation: "1745:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 173,
                  src: "1737:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 146,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1737:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 149,
                  mutability: "mutable",
                  name: "b",
                  nameLocation: "1756:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 173,
                  src: "1748:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 148,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1748:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1736:22:1",
            },
            returnParameters: {
              id: 153,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 152,
                  mutability: "mutable",
                  name: "c",
                  nameLocation: "1788:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 173,
                  src: "1780:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 151,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1780:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1779:11:1",
            },
            scope: 196,
            src: "1720:139:1",
            stateMutability: "pure",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 194,
              nodeType: "Block",
              src: "1938:53:1",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 185,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 183,
                          name: "b",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 177,
                          src: "1957:1:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: ">",
                        rightExpression: {
                          hexValue: "30",
                          id: 184,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "1961:1:1",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0",
                          },
                          value: "0",
                        },
                        src: "1957:5:1",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 182,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "1949:7:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure",
                      },
                    },
                    id: 186,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1949:14:1",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 187,
                  nodeType: "ExpressionStatement",
                  src: "1949:14:1",
                },
                {
                  expression: {
                    id: 192,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 188,
                      name: "c",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 180,
                      src: "1974:1:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 191,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        id: 189,
                        name: "a",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 175,
                        src: "1978:1:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "/",
                      rightExpression: {
                        id: 190,
                        name: "b",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 177,
                        src: "1982:1:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1978:5:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "1974:9:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 193,
                  nodeType: "ExpressionStatement",
                  src: "1974:9:1",
                },
              ],
            },
            functionSelector: "b5931f7c",
            id: 195,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "safeDiv",
            nameLocation: "1876:7:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 178,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 175,
                  mutability: "mutable",
                  name: "a",
                  nameLocation: "1892:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 195,
                  src: "1884:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 174,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1884:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 177,
                  mutability: "mutable",
                  name: "b",
                  nameLocation: "1903:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 195,
                  src: "1895:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 176,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1895:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1883:22:1",
            },
            returnParameters: {
              id: 181,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 180,
                  mutability: "mutable",
                  name: "c",
                  nameLocation: "1935:1:1",
                  nodeType: "VariableDeclaration",
                  scope: 195,
                  src: "1927:9:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 179,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1927:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1926:11:1",
            },
            scope: 196,
            src: "1867:124:1",
            stateMutability: "pure",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 437,
        src: "1429:565:1",
        usedErrors: [],
      },
      {
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 197,
              name: "ERC20Interface",
              nodeType: "IdentifierPath",
              referencedDeclaration: 101,
              src: "2022:14:1",
            },
            id: 198,
            nodeType: "InheritanceSpecifier",
            src: "2022:14:1",
          },
          {
            baseName: {
              id: 199,
              name: "SafeMath",
              nodeType: "IdentifierPath",
              referencedDeclaration: 196,
              src: "2038:8:1",
            },
            id: 200,
            nodeType: "InheritanceSpecifier",
            src: "2038:8:1",
          },
        ],
        canonicalName: "ProTikToken",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 436,
        linearizedBaseContracts: [436, 196, 101],
        name: "ProTikToken",
        nameLocation: "2007:11:1",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            functionSelector: "06fdde03",
            id: 202,
            mutability: "mutable",
            name: "name",
            nameLocation: "2068:4:1",
            nodeType: "VariableDeclaration",
            scope: 436,
            src: "2054:18:1",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 201,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "2054:6:1",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            visibility: "public",
          },
          {
            constant: false,
            functionSelector: "95d89b41",
            id: 204,
            mutability: "mutable",
            name: "symbol",
            nameLocation: "2093:6:1",
            nodeType: "VariableDeclaration",
            scope: 436,
            src: "2079:20:1",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 203,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "2079:6:1",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            visibility: "public",
          },
          {
            constant: false,
            functionSelector: "313ce567",
            id: 206,
            mutability: "mutable",
            name: "decimals",
            nameLocation: "2119:8:1",
            nodeType: "VariableDeclaration",
            scope: 436,
            src: "2106:21:1",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint8",
              typeString: "uint8",
            },
            typeName: {
              id: 205,
              name: "uint8",
              nodeType: "ElementaryTypeName",
              src: "2106:5:1",
              typeDescriptions: {
                typeIdentifier: "t_uint8",
                typeString: "uint8",
              },
            },
            visibility: "public",
          },
          {
            constant: false,
            functionSelector: "3eaaf86b",
            id: 208,
            mutability: "mutable",
            name: "_totalSupply",
            nameLocation: "2219:12:1",
            nodeType: "VariableDeclaration",
            scope: 436,
            src: "2204:27:1",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 207,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "2204:7:1",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            visibility: "public",
          },
          {
            constant: false,
            id: 212,
            mutability: "mutable",
            name: "balances",
            nameLocation: "2268:8:1",
            nodeType: "VariableDeclaration",
            scope: 436,
            src: "2240:36:1",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
              typeString: "mapping(address => uint256)",
            },
            typeName: {
              id: 211,
              keyType: {
                id: 209,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "2248:7:1",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address",
                },
              },
              nodeType: "Mapping",
              src: "2240:27:1",
              typeDescriptions: {
                typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                typeString: "mapping(address => uint256)",
              },
              valueType: {
                id: 210,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "2259:7:1",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
            },
            visibility: "internal",
          },
          {
            constant: false,
            id: 218,
            mutability: "mutable",
            name: "allowed",
            nameLocation: "2331:7:1",
            nodeType: "VariableDeclaration",
            scope: 436,
            src: "2283:55:1",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              typeString: "mapping(address => mapping(address => uint256))",
            },
            typeName: {
              id: 217,
              keyType: {
                id: 213,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "2291:7:1",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address",
                },
              },
              nodeType: "Mapping",
              src: "2283:47:1",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                typeString: "mapping(address => mapping(address => uint256))",
              },
              valueType: {
                id: 216,
                keyType: {
                  id: 214,
                  name: "address",
                  nodeType: "ElementaryTypeName",
                  src: "2310:7:1",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                },
                nodeType: "Mapping",
                src: "2302:27:1",
                typeDescriptions: {
                  typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                  typeString: "mapping(address => uint256)",
                },
                valueType: {
                  id: 215,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "2321:7:1",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
              },
            },
            visibility: "internal",
          },
          {
            body: {
              id: 255,
              nodeType: "Block",
              src: "2509:252:1",
              statements: [
                {
                  expression: {
                    id: 224,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 222,
                      name: "name",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 202,
                      src: "2520:4:1",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      hexValue: "50726f54696b20546f6b656e",
                      id: 223,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "string",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "2527:14:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_stringliteral_7df10fbdf96f43b8be8274005a0a74fa45fd6b2e805fe88c5fbd288637c3708e",
                        typeString: 'literal_string "ProTik Token"',
                      },
                      value: "ProTik Token",
                    },
                    src: "2520:21:1",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 225,
                  nodeType: "ExpressionStatement",
                  src: "2520:21:1",
                },
                {
                  expression: {
                    id: 228,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 226,
                      name: "symbol",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 204,
                      src: "2552:6:1",
                      typeDescriptions: {
                        typeIdentifier: "t_string_storage",
                        typeString: "string storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      hexValue: "505454",
                      id: 227,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "string",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "2561:5:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_stringliteral_1d35641b23772910ab6d22ac30ad06d886a3f3189792ac584297118328fb2b2b",
                        typeString: 'literal_string "PTT"',
                      },
                      value: "PTT",
                    },
                    src: "2552:14:1",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage",
                      typeString: "string storage ref",
                    },
                  },
                  id: 229,
                  nodeType: "ExpressionStatement",
                  src: "2552:14:1",
                },
                {
                  expression: {
                    id: 232,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 230,
                      name: "decimals",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 206,
                      src: "2577:8:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint8",
                        typeString: "uint8",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      hexValue: "3138",
                      id: 231,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "2588:2:1",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_18_by_1",
                        typeString: "int_const 18",
                      },
                      value: "18",
                    },
                    src: "2577:13:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint8",
                      typeString: "uint8",
                    },
                  },
                  id: 233,
                  nodeType: "ExpressionStatement",
                  src: "2577:13:1",
                },
                {
                  expression: {
                    id: 236,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 234,
                      name: "_totalSupply",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 208,
                      src: "2601:12:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      hexValue:
                        "313030303030303030303030303030303030303030303030303030",
                      id: 235,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "2616:27:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_rational_100000000000000000000000000_by_1",
                        typeString: "int_const 100000000000000000000000000",
                      },
                      value: "100000000000000000000000000",
                    },
                    src: "2601:42:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 237,
                  nodeType: "ExpressionStatement",
                  src: "2601:42:1",
                },
                {
                  expression: {
                    id: 243,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 238,
                        name: "balances",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 212,
                        src: "2656:8:1",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 241,
                      indexExpression: {
                        expression: {
                          id: 239,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "2665:3:1",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 240,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "2665:10:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "2656:20:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 242,
                      name: "_totalSupply",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 208,
                      src: "2679:12:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2656:35:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 244,
                  nodeType: "ExpressionStatement",
                  src: "2656:35:1",
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        arguments: [
                          {
                            hexValue: "30",
                            id: 248,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2724:1:1",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                          ],
                          id: 247,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "2716:7:1",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_address_$",
                            typeString: "type(address)",
                          },
                          typeName: {
                            id: 246,
                            name: "address",
                            nodeType: "ElementaryTypeName",
                            src: "2716:7:1",
                            typeDescriptions: {},
                          },
                        },
                        id: 249,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "typeConversion",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "2716:10:1",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        expression: {
                          id: 250,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "2728:3:1",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 251,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "2728:10:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 252,
                        name: "_totalSupply",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 208,
                        src: "2740:12:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 245,
                      name: "Transfer",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 92,
                      src: "2707:8:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,address,uint256)",
                      },
                    },
                    id: 253,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2707:46:1",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 254,
                  nodeType: "EmitStatement",
                  src: "2702:51:1",
                },
              ],
            },
            documentation: {
              id: 219,
              nodeType: "StructuredDocumentation",
              src: "2347:135:1",
              text: " Constrctor function\n Initializes contract with initial supply tokens to the creator of the contract",
            },
            id: 256,
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nameLocation: "-1:-1:-1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 220,
              nodeType: "ParameterList",
              parameters: [],
              src: "2499:2:1",
            },
            returnParameters: {
              id: 221,
              nodeType: "ParameterList",
              parameters: [],
              src: "2509:0:1",
            },
            scope: 436,
            src: "2488:273:1",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            baseFunctions: [39],
            body: {
              id: 271,
              nodeType: "Block",
              src: "2831:61:1",
              statements: [
                {
                  expression: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 269,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 262,
                      name: "_totalSupply",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 208,
                      src: "2849:12:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "-",
                    rightExpression: {
                      baseExpression: {
                        id: 263,
                        name: "balances",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 212,
                        src: "2864:8:1",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 268,
                      indexExpression: {
                        arguments: [
                          {
                            hexValue: "30",
                            id: 266,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2881:1:1",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                          ],
                          id: 265,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "2873:7:1",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_address_$",
                            typeString: "type(address)",
                          },
                          typeName: {
                            id: 264,
                            name: "address",
                            nodeType: "ElementaryTypeName",
                            src: "2873:7:1",
                            typeDescriptions: {},
                          },
                        },
                        id: 267,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "typeConversion",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "2873:10:1",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "IndexAccess",
                      src: "2864:20:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2849:35:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 261,
                  id: 270,
                  nodeType: "Return",
                  src: "2842:42:1",
                },
              ],
            },
            functionSelector: "18160ddd",
            id: 272,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "totalSupply",
            nameLocation: "2778:11:1",
            nodeType: "FunctionDefinition",
            overrides: {
              id: 258,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "2804:8:1",
            },
            parameters: {
              id: 257,
              nodeType: "ParameterList",
              parameters: [],
              src: "2789:2:1",
            },
            returnParameters: {
              id: 261,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 260,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 272,
                  src: "2822:7:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 259,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2822:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2821:9:1",
            },
            scope: 436,
            src: "2769:123:1",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            baseFunctions: [46],
            body: {
              id: 284,
              nodeType: "Block",
              src: "3027:46:1",
              statements: [
                {
                  expression: {
                    baseExpression: {
                      id: 280,
                      name: "balances",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 212,
                      src: "3045:8:1",
                      typeDescriptions: {
                        typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                        typeString: "mapping(address => uint256)",
                      },
                    },
                    id: 282,
                    indexExpression: {
                      id: 281,
                      name: "tokenOwner",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 274,
                      src: "3054:10:1",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "IndexAccess",
                    src: "3045:20:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 279,
                  id: 283,
                  nodeType: "Return",
                  src: "3038:27:1",
                },
              ],
            },
            functionSelector: "70a08231",
            id: 285,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "balanceOf",
            nameLocation: "2909:9:1",
            nodeType: "FunctionDefinition",
            overrides: {
              id: 276,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "2978:8:1",
            },
            parameters: {
              id: 275,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 274,
                  mutability: "mutable",
                  name: "tokenOwner",
                  nameLocation: "2927:10:1",
                  nodeType: "VariableDeclaration",
                  scope: 285,
                  src: "2919:18:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 273,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "2919:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2918:20:1",
            },
            returnParameters: {
              id: 279,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 278,
                  mutability: "mutable",
                  name: "balance",
                  nameLocation: "3013:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 285,
                  src: "3005:15:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 277,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3005:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3004:17:1",
            },
            scope: 436,
            src: "2900:173:1",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            baseFunctions: [55],
            body: {
              id: 301,
              nodeType: "Block",
              src: "3227:54:1",
              statements: [
                {
                  expression: {
                    baseExpression: {
                      baseExpression: {
                        id: 295,
                        name: "allowed",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 218,
                        src: "3245:7:1",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          typeString:
                            "mapping(address => mapping(address => uint256))",
                        },
                      },
                      id: 297,
                      indexExpression: {
                        id: 296,
                        name: "tokenOwner",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 287,
                        src: "3253:10:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "IndexAccess",
                      src: "3245:19:1",
                      typeDescriptions: {
                        typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                        typeString: "mapping(address => uint256)",
                      },
                    },
                    id: 299,
                    indexExpression: {
                      id: 298,
                      name: "spender",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 289,
                      src: "3265:7:1",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "IndexAccess",
                    src: "3245:28:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 294,
                  id: 300,
                  nodeType: "Return",
                  src: "3238:35:1",
                },
              ],
            },
            functionSelector: "dd62ed3e",
            id: 302,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "allowance",
            nameLocation: "3090:9:1",
            nodeType: "FunctionDefinition",
            overrides: {
              id: 291,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "3176:8:1",
            },
            parameters: {
              id: 290,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 287,
                  mutability: "mutable",
                  name: "tokenOwner",
                  nameLocation: "3108:10:1",
                  nodeType: "VariableDeclaration",
                  scope: 302,
                  src: "3100:18:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 286,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3100:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 289,
                  mutability: "mutable",
                  name: "spender",
                  nameLocation: "3128:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 302,
                  src: "3120:15:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 288,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3120:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3099:37:1",
            },
            returnParameters: {
              id: 294,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 293,
                  mutability: "mutable",
                  name: "remaining",
                  nameLocation: "3211:9:1",
                  nodeType: "VariableDeclaration",
                  scope: 302,
                  src: "3203:17:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 292,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3203:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3202:19:1",
            },
            scope: 436,
            src: "3081:200:1",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            baseFunctions: [73],
            body: {
              id: 330,
              nodeType: "Block",
              src: "3410:131:1",
              statements: [
                {
                  expression: {
                    id: 319,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        baseExpression: {
                          id: 312,
                          name: "allowed",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 218,
                          src: "3421:7:1",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            typeString:
                              "mapping(address => mapping(address => uint256))",
                          },
                        },
                        id: 316,
                        indexExpression: {
                          expression: {
                            id: 313,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "3429:3:1",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 314,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "3429:10:1",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "3421:19:1",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 317,
                      indexExpression: {
                        id: 315,
                        name: "spender",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 304,
                        src: "3441:7:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "3421:28:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 318,
                      name: "tokens",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 306,
                      src: "3452:6:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "3421:37:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 320,
                  nodeType: "ExpressionStatement",
                  src: "3421:37:1",
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        expression: {
                          id: 322,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "3483:3:1",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 323,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "3483:10:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 324,
                        name: "spender",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 304,
                        src: "3495:7:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 325,
                        name: "tokens",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 306,
                        src: "3504:6:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 321,
                      name: "Approval",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 100,
                      src: "3474:8:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,address,uint256)",
                      },
                    },
                    id: 326,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3474:37:1",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 327,
                  nodeType: "EmitStatement",
                  src: "3469:42:1",
                },
                {
                  expression: {
                    hexValue: "74727565",
                    id: 328,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "bool",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "3529:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    value: "true",
                  },
                  functionReturnParameters: 311,
                  id: 329,
                  nodeType: "Return",
                  src: "3522:11:1",
                },
              ],
            },
            functionSelector: "095ea7b3",
            id: 331,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "approve",
            nameLocation: "3298:7:1",
            nodeType: "FunctionDefinition",
            overrides: {
              id: 308,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "3364:8:1",
            },
            parameters: {
              id: 307,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 304,
                  mutability: "mutable",
                  name: "spender",
                  nameLocation: "3314:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 331,
                  src: "3306:15:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 303,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3306:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 306,
                  mutability: "mutable",
                  name: "tokens",
                  nameLocation: "3331:6:1",
                  nodeType: "VariableDeclaration",
                  scope: 331,
                  src: "3323:14:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 305,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3323:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3305:33:1",
            },
            returnParameters: {
              id: 311,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 310,
                  mutability: "mutable",
                  name: "success",
                  nameLocation: "3396:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 331,
                  src: "3391:12:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 309,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "3391:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3390:14:1",
            },
            scope: 436,
            src: "3289:252:1",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            baseFunctions: [64],
            body: {
              id: 374,
              nodeType: "Block",
              src: "3666:204:1",
              statements: [
                {
                  expression: {
                    id: 352,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 341,
                        name: "balances",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 212,
                        src: "3677:8:1",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 344,
                      indexExpression: {
                        expression: {
                          id: 342,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "3686:3:1",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 343,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "3686:10:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "3677:20:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          baseExpression: {
                            id: 346,
                            name: "balances",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 212,
                            src: "3708:8:1",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_uint256_$",
                              typeString: "mapping(address => uint256)",
                            },
                          },
                          id: 349,
                          indexExpression: {
                            expression: {
                              id: 347,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: "3717:3:1",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg",
                              },
                            },
                            id: 348,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "sender",
                            nodeType: "MemberAccess",
                            src: "3717:10:1",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "3708:20:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 350,
                          name: "tokens",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 335,
                          src: "3730:6:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 345,
                        name: "safeSub",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 145,
                        src: "3700:7:1",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 351,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "3700:37:1",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "3677:60:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 353,
                  nodeType: "ExpressionStatement",
                  src: "3677:60:1",
                },
                {
                  expression: {
                    id: 363,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 354,
                        name: "balances",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 212,
                        src: "3748:8:1",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 356,
                      indexExpression: {
                        id: 355,
                        name: "to",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 333,
                        src: "3757:2:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "3748:12:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          baseExpression: {
                            id: 358,
                            name: "balances",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 212,
                            src: "3771:8:1",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_uint256_$",
                              typeString: "mapping(address => uint256)",
                            },
                          },
                          id: 360,
                          indexExpression: {
                            id: 359,
                            name: "to",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 333,
                            src: "3780:2:1",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "3771:12:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 361,
                          name: "tokens",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 335,
                          src: "3785:6:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 357,
                        name: "safeAdd",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 123,
                        src: "3763:7:1",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 362,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "3763:29:1",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "3748:44:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 364,
                  nodeType: "ExpressionStatement",
                  src: "3748:44:1",
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        expression: {
                          id: 366,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "3817:3:1",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 367,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "3817:10:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 368,
                        name: "to",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 333,
                        src: "3829:2:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 369,
                        name: "tokens",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 335,
                        src: "3833:6:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 365,
                      name: "Transfer",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 92,
                      src: "3808:8:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,address,uint256)",
                      },
                    },
                    id: 370,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3808:32:1",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 371,
                  nodeType: "EmitStatement",
                  src: "3803:37:1",
                },
                {
                  expression: {
                    hexValue: "74727565",
                    id: 372,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "bool",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "3858:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    value: "true",
                  },
                  functionReturnParameters: 340,
                  id: 373,
                  nodeType: "Return",
                  src: "3851:11:1",
                },
              ],
            },
            functionSelector: "a9059cbb",
            id: 375,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "transfer",
            nameLocation: "3558:8:1",
            nodeType: "FunctionDefinition",
            overrides: {
              id: 337,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "3620:8:1",
            },
            parameters: {
              id: 336,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 333,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "3575:2:1",
                  nodeType: "VariableDeclaration",
                  scope: 375,
                  src: "3567:10:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 332,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3567:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 335,
                  mutability: "mutable",
                  name: "tokens",
                  nameLocation: "3587:6:1",
                  nodeType: "VariableDeclaration",
                  scope: 375,
                  src: "3579:14:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 334,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3579:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3566:28:1",
            },
            returnParameters: {
              id: 340,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 339,
                  mutability: "mutable",
                  name: "success",
                  nameLocation: "3652:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 375,
                  src: "3647:12:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 338,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "3647:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3646:14:1",
            },
            scope: 436,
            src: "3549:321:1",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            baseFunctions: [84],
            body: {
              id: 434,
              nodeType: "Block",
              src: "4015:267:1",
              statements: [
                {
                  expression: {
                    id: 396,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 387,
                        name: "balances",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 212,
                        src: "4026:8:1",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 389,
                      indexExpression: {
                        id: 388,
                        name: "from",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 377,
                        src: "4035:4:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "4026:14:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          baseExpression: {
                            id: 391,
                            name: "balances",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 212,
                            src: "4051:8:1",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_uint256_$",
                              typeString: "mapping(address => uint256)",
                            },
                          },
                          id: 393,
                          indexExpression: {
                            id: 392,
                            name: "from",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 377,
                            src: "4060:4:1",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "4051:14:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 394,
                          name: "tokens",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 381,
                          src: "4067:6:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 390,
                        name: "safeSub",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 145,
                        src: "4043:7:1",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 395,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "4043:31:1",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "4026:48:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 397,
                  nodeType: "ExpressionStatement",
                  src: "4026:48:1",
                },
                {
                  expression: {
                    id: 413,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        baseExpression: {
                          id: 398,
                          name: "allowed",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 218,
                          src: "4085:7:1",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            typeString:
                              "mapping(address => mapping(address => uint256))",
                          },
                        },
                        id: 402,
                        indexExpression: {
                          id: 399,
                          name: "from",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 377,
                          src: "4093:4:1",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "4085:13:1",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 403,
                      indexExpression: {
                        expression: {
                          id: 400,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "4099:3:1",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 401,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "4099:10:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "4085:25:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          baseExpression: {
                            baseExpression: {
                              id: 405,
                              name: "allowed",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 218,
                              src: "4121:7:1",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                typeString:
                                  "mapping(address => mapping(address => uint256))",
                              },
                            },
                            id: 407,
                            indexExpression: {
                              id: 406,
                              name: "from",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 377,
                              src: "4129:4:1",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: "IndexAccess",
                            src: "4121:13:1",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_uint256_$",
                              typeString: "mapping(address => uint256)",
                            },
                          },
                          id: 410,
                          indexExpression: {
                            expression: {
                              id: 408,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: "4135:3:1",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg",
                              },
                            },
                            id: 409,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "sender",
                            nodeType: "MemberAccess",
                            src: "4135:10:1",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "4121:25:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 411,
                          name: "tokens",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 381,
                          src: "4148:6:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 404,
                        name: "safeSub",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 145,
                        src: "4113:7:1",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 412,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "4113:42:1",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "4085:70:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 414,
                  nodeType: "ExpressionStatement",
                  src: "4085:70:1",
                },
                {
                  expression: {
                    id: 424,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 415,
                        name: "balances",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 212,
                        src: "4166:8:1",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                          typeString: "mapping(address => uint256)",
                        },
                      },
                      id: 417,
                      indexExpression: {
                        id: 416,
                        name: "to",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 379,
                        src: "4175:2:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "4166:12:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          baseExpression: {
                            id: 419,
                            name: "balances",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 212,
                            src: "4189:8:1",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_uint256_$",
                              typeString: "mapping(address => uint256)",
                            },
                          },
                          id: 421,
                          indexExpression: {
                            id: 420,
                            name: "to",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 379,
                            src: "4198:2:1",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "4189:12:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 422,
                          name: "tokens",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 381,
                          src: "4203:6:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 418,
                        name: "safeAdd",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 123,
                        src: "4181:7:1",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 423,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "4181:29:1",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "4166:44:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 425,
                  nodeType: "ExpressionStatement",
                  src: "4166:44:1",
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        id: 427,
                        name: "from",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 377,
                        src: "4235:4:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 428,
                        name: "to",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 379,
                        src: "4241:2:1",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 429,
                        name: "tokens",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 381,
                        src: "4245:6:1",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 426,
                      name: "Transfer",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 92,
                      src: "4226:8:1",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,address,uint256)",
                      },
                    },
                    id: 430,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4226:26:1",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 431,
                  nodeType: "EmitStatement",
                  src: "4221:31:1",
                },
                {
                  expression: {
                    hexValue: "74727565",
                    id: 432,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "bool",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "4270:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    value: "true",
                  },
                  functionReturnParameters: 386,
                  id: 433,
                  nodeType: "Return",
                  src: "4263:11:1",
                },
              ],
            },
            functionSelector: "23b872dd",
            id: 435,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "transferFrom",
            nameLocation: "3887:12:1",
            nodeType: "FunctionDefinition",
            overrides: {
              id: 383,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "3983:8:1",
            },
            parameters: {
              id: 382,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 377,
                  mutability: "mutable",
                  name: "from",
                  nameLocation: "3918:4:1",
                  nodeType: "VariableDeclaration",
                  scope: 435,
                  src: "3910:12:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 376,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3910:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 379,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "3941:2:1",
                  nodeType: "VariableDeclaration",
                  scope: 435,
                  src: "3933:10:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 378,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3933:7:1",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 381,
                  mutability: "mutable",
                  name: "tokens",
                  nameLocation: "3962:6:1",
                  nodeType: "VariableDeclaration",
                  scope: 435,
                  src: "3954:14:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 380,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3954:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3899:76:1",
            },
            returnParameters: {
              id: 386,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 385,
                  mutability: "mutable",
                  name: "success",
                  nameLocation: "4006:7:1",
                  nodeType: "VariableDeclaration",
                  scope: 435,
                  src: "4001:12:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 384,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "4001:4:1",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "4000:14:1",
            },
            scope: 436,
            src: "3878:404:1",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 437,
        src: "1998:2287:1",
        usedErrors: [],
      },
    ],
    src: "39:4248:1",
  },
  compiler: {
    name: "solc",
    version: "0.8.13+commit.abaa5c0e.Emscripten.clang",
  },
  networks: {
    3: {
      events: {},
      links: {},
      address: "0x17EeE39Bd400814168411E9109d67a4093A82492",
      transactionHash:
        "0x2183e4a84aa4389173482c303610db0783cb971bfa95b029ed3f7e6245a6a1f4",
    },
  },
  schemaVersion: "3.4.7",
  updatedAt: "2022-05-17T10:55:11.425Z",
  networkType: "ethereum",
  devdoc: {
    kind: "dev",
    methods: {},
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {
      constructor: {
        notice:
          "Constrctor function Initializes contract with initial supply tokens to the creator of the contract",
      },
    },
    version: 1,
  },
};
export default PTT;
