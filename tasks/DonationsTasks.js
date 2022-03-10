const { task } = require("hardhat/config");
const fs = require("fs");

task("total-balance", "Prints an smart contract balance")
  .addParam("contract", "The contract")
  .setAction(async (taskArgs, hre) => {
    const contractAddr = taskArgs.contract;
    let signer;
    [signer] = await hre.ethers.getSigners();

    const contract = await hre.ethers.getContractFactory("Donations");
    const DonationsContract = await new hre.ethers.Contract(contractAddr, contract.interface, signer);

    const balance = await DonationsContract.getTotalBalance();

    console.log('Total balance', balance);
  });

module.exports = {};
