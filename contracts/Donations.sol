//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract Donations {
  struct Donation {
    uint sum;
    address from;
  }

  struct Balance {
    uint totalSum;
    mapping (uint => Donation) payments;
  }

  mapping(address => Balance) public balances;
  address[] addresses;
  address public owner;

  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner(){
    require(msg.sender == owner, "Ownable: caller is not the owner");
    _;
  }

  function donat() public payable {
    uint donatNum = balances[msg.sender].totalSum;

    if (balances[msg.sender].totalSum == 0) {
      addresses.push(msg.sender);
    }

    balances[msg.sender].totalSum += msg.value;

    Donation memory newDonation = Donation(msg.value, msg.sender);

    balances[msg.sender].payments[donatNum] = newDonation;
  }

  function withDrawAll(address _addrWalletTo, uint amount) public onlyOwner {
    require(amount <= address(this).balance, "Insufficient funds");
    address payable _to = payable(_addrWalletTo);

    _to.transfer(amount);
  }

  function getTotalBalance() public view returns(uint) {
    return address(this).balance;
  }

  function getBalanceByAddress(address _addr) public view returns(uint) {
    return balances[_addr].totalSum;
  }

  function getClients() public view returns(address[] memory) {
    return addresses;
  }
}
