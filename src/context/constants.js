import loanContract from "../artifacts/contracts/LoanContract.sol/LoanContract.json";

export const LoanContractAddress = "0xC54e419Ca67DbC02552eF1c9a401c57f2302F0e8";
export const LoanContractABI = loanContract.abi;

export const ChainId = {
    MAINNET: 1,
    GOERLI: 5,
    POLYGON_MUMBAI: 80001,
    POLYGON_MAINNET: 137,
};

export let activeChainId = ChainId.POLYGON_MUMBAI;
export const supportedChains = [
    ChainId.GOERLI,
    ChainId.POLYGON_MAINNET,
    ChainId.POLYGON_MUMBAI,
];
