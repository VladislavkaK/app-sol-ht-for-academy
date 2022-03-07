//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract Donations {
  function currentBalance() public view returns(uint) {
    return address(this).balance;
  }
}
