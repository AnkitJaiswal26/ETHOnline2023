// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    // using Counters for Counters.Counter;
    // Counters.Counter private _tokenIds;
    uint256 private _tokenIdCounter;

    struct ExchangeNFT {
        uint256 AmountId;
        address borrowerAddress;
        address lenderAddress;
        uint256 amount;
        uint256 interest;
        uint256 duration;
        uint256 startDate;
        uint256 endDate;
        bool isPaid;
        uint256 collateral;
    }

    constructor(address _borrowerAddress, address _lenderAddress, uint256 _AmountId, uint256 amount, uint256 interest, uint256 duration,  uint256 startDate, uint256 endDate, uint256 collateral) ERC721("GameItem", "ITM") {}

    function mintNFT(address _borrowerAddress, address _lenderAddress, uint256 amount, uint256 interest, uint256 duration,  uint256 startDate, uint256 endDate, uint256 collateral, string memory tokenURI) public returns (ExchangeNFT memory) {
        uint256 newItemId = _tokenIdCounter;

        _safeMint(_lenderAddress, newItemId);
        _setTokenURI(newItemId, tokenURI);

        ExchangeNFT memory exchangeNFT = ExchangeNFT(newItemId, _borrowerAddress, _lenderAddress, amount, interest, duration, startDate, endDate, false, collateral);

        _tokenIdCounter += 1;
        return exchangeNFT;
    }

    function fetchNFTById(uint256 tokenId) public view returns (ExchangeNFT memory) {
        return ExchangeNFT(tokenId, ownerOf(tokenId), ownerOf(tokenId), 0, 0, 0, 0, 0, false, 0);
    }

}
