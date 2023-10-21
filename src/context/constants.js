import loanContract from "../artifacts/contracts/LoanContract.sol/LoanContract.json";

export const LoanContractAddress = "0x108A19d630bd6a11EB259Ca9DB972B608fEB1837";
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