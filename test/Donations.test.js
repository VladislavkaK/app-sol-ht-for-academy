const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Donations', function () {
  let donations, acc1, acc2;

  beforeEach(async function() {
    [acc1, acc2] = await ethers.getSigners();
    const Donations = await ethers.getContractFactory('Donations', acc1);

    donations = await Donations.deploy();

    await donations.deployed();
  });

  it('should be deployed', async () => {
    // eslint-disable-next-line
    expect(donations.address).to.be.properAddress;
  });
});
