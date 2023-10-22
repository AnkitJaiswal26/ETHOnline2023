require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: {
        version: "0.8.20",
        settings: { optimizer: { enabled: true, runs: 200 } },
    },
    paths: {
        artifacts: "./src/artifacts",
    },
    networks: {
        hardhat: {
            enableTransientStorage: true,
        },
        polygon_mumbai: {
            url: `https://polished-attentive-film.matic-testnet.discover.quiknode.pro/30b6d013db1d5594d93f664dccea8fca81ca5b56/`,
            accounts: [
                "0x7a62aa11fa06bc5f21ef8819674ce87876b678f7e288b9c8347fdd3eff7faf89",
            ],
            allowUnlimitedContractSize: true,
        },
        mantle: {
            url: `https://rpc.testnet.mantle.xyz/`,
            accounts: [
                "0x1bd3b7611b82c149076b88c86d926cf48b126f18d91f63a4d7c9f427cfb17666",
            ],
            chainId: 5001,
            allowUnlimitedContractSize: true,
        },
    },
};