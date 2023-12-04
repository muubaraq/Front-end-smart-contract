// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


contract Updater{
    uint256 public favNumber;

    function updateFavNumber(uint256 _favNumber) public{
        favNumber = _favNumber;
    }
     function getFavNumber() public view returns (uint256) {
        return favNumber;
    }
}