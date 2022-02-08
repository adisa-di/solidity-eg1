pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Contract {
    uint256 public x = 10;
    uint256 public y = 20;
    uint256 public z = y - x;

    constructor(
        uint256 _x,
        uint256 _y,
        uint256 _z
    ) {
        x = _x;
        y = _y;
        z = _z;
    }
}
