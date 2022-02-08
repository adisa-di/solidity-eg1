const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("Contract", function () {
  let contract;

  before(async () => {
    const Contract = await ethers.getContractFactory("Contract");
    contract = await Contract.deploy(1, 2, 3);
    await contract.deployed();
  });

  it("Should have an x", async function () {
    assert.equal(await contract.x(), 1);
  });

  it("Should have a y", async function () {
    assert.equal(await contract.y(), 2);    
  });

  it("Should have a z", async function () {
    assert.equal(await contract.z(), 3);
  });
});
