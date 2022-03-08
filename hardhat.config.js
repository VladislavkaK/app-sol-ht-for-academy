require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-solhint");
require("@nomiclabs/hardhat-web3");
require("solidity-coverage");
require("dotenv").config();
require("./tasks/DonationsTasks.js")

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    hardhat: {
      chainId: 1337,
    },
  },
  paths:{
    artifacts: "./src/artifacts",
    cache: "./src/cache",
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      rinkeby: `${process.env.ETHERSCAN_KEY}`
    }
  }
};
