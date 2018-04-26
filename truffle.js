module.exports = {
  rpc: {
    host:"localhost",
    port:8545
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4712388,    // default
      from: "0000000000000000000000000000000000000001"
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4",
      gas: 4712388,
      gasPrice: 100000000000,
      from: "79a1b6fecfa9c954803d2b59773fadc39d063e64"
    }
  }
};
