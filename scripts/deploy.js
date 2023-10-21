const ethers = require("hardhat").ethers;
// import hre from "hardhat";

async function main() {
    const loanContract = await ethers.deployContract("LoanContract", { gasLimit: "0x1000000" });
    await loanContract.waitForDeployment();
    console.log(`Contract deployed to address: ${loanContract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});