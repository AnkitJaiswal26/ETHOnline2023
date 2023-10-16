const hre = require("hardhat");

async function main() {
    const loanContract = await hre.ethers.deployContract("LoanContract");
    await loanContract.waitForDeployment();
    console.log(`Contract deployed to address: ${loanContract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});