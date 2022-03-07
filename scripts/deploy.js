const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [signer] = await ethers.getSigners();
  const Donations = await hre.ethers.getContractFactory("Donations", signer);
  const donations = await Donations.deploy();

  await donations.deployed();

  console.log('address', donations.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
