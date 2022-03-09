const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Donations', function () {
  let donationsContract, ownerAccount, clientAccount, clientAccount2, clientAccount3;

  beforeEach(async function() {
    [ownerAccount, clientAccount, clientAccount2, clientAccount3] = await ethers.getSigners();

    const Donations = await ethers.getContractFactory('Donations', ownerAccount);

    donationsContract = await Donations.deploy();

    await donationsContract.deployed();
  });

  it('should be deployed', async () => {
    // eslint-disable-next-line
    expect(donationsContract.address).to.be.properAddress;
  });

  it('balance by default', async () => {
    const balance = await donationsContract.getTotalBalance();
    // eslint-disable-next-line
    expect(balance).to.eq(0);
  });

  it('sending donations', async () => {
    const tx = await donationsContract.connect(clientAccount).donat({ value: '100' });
    const tx2 = await donationsContract.connect(clientAccount2).donat({ value: '25' });
    const tx3 = await donationsContract.connect(clientAccount3).donat({ value: '10' });
    const tx4 = await donationsContract.connect(clientAccount2).donat({ value: '15' });
    const txWithdrawalFunds = await donationsContract.connect(ownerAccount).withDrawAll(clientAccount2.address, 10);

    // eslint-disable-next-line
    await expect(() => tx).to.changeEtherBalance(clientAccount, -100);
    // eslint-disable-next-line
    await expect(() => tx2).to.changeEtherBalance(clientAccount2, -25);
    // eslint-disable-next-line
    await expect(() => tx3).to.changeEtherBalance(clientAccount3, -10);
    // eslint-disable-next-line
    await expect(() => tx4).to.changeEtherBalance(clientAccount2, -15);
    // eslint-disable-next-line
    await expect(() => txWithdrawalFunds).to.changeEtherBalance(clientAccount2, 10);
    await tx.wait();

    const balanceByAddressClientAccount2 = await donationsContract.getBalanceByAddress(clientAccount2.address);
    const totalBalance = await donationsContract.getTotalBalance();
    const clients = await donationsContract.getClients();
    const numberClients = 3;

    // eslint-disable-next-line
    expect(totalBalance).to.eq(140);
    // eslint-disable-next-line
    expect(balanceByAddressClientAccount2).to.eq(40);
    // eslint-disable-next-line
    expect(clients.length).to.eq(numberClients);
  });
});
