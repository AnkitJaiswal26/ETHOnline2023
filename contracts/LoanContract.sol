// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "./RestrictHook.sol";

contract LoanContract is ERC721URIStorage {
    struct User {
        uint256 userId;
        string userName;
        address userAddress;
    }

    uint256 userCount;
    uint256 lenderNFTCount;
    uint256 borrowerNFTCount;

    uint256 private _tokenIdCounter;
    uint256 private _totalLenderNFTCount;
    uint256 private _totalBorrowerNFTCount;

    struct ExchangeNFT {
        uint256 amountId;
        address borrowerAddress;
        address lenderAddress;
        uint256 amount;
        uint256 interest;
        uint256 duration;
        uint256 startDate;
        uint256 endDate;
        bool isPaid;
        uint256 collateral;
        uint256 onSale;
    }

    constructor(
        address _borrowerAddress,
        address _lenderAddress,
        uint256 _AmountId,
        uint256 amount,
        uint256 interest,
        uint256 duration,
        uint256 startDate,
        uint256 endDate,
        uint256 collateral,
        uint256 onSale
    ) ERC721("GameItem", "ITM") {}

    mapping(uint256 => User) public users;

    // mapping(uint256 => ExchangeNFT[]) public myLenderToNFTMapping;
    // mapping(uint256 => ExchangeNFT[]) public myBorrowerToNFTMapping;
    // mapping(uint256 => ExchangeNFT) public totalNFTs;
    mapping(uint256 => ExchangeNFT) public totalLenderNFTs;
    mapping(uint256 => ExchangeNFT) public totalBorrowerNFTs;
    // mapping(uint256 => ExchangeNFT[]) public totalBorrowerNFTs;

    mapping(address => uint256) public userAddressToIdMapping;
    mapping(uint256 => uint256) public totalLendAmount;
    mapping(uint256 => uint256) public totalBorrowAmount;

    mapping(address => User) addressToUserMapping;

    function addLendAmount() public payable //     address _userAddress,
    {
        payable(address(this)).transfer(msg.value);
    }

    function addBorrowAmount() public payable // address _userAddress,

    {
        payable(address(this)).transfer(msg.value);
    }

    function mintNFT(
        address _borrowerAddress,
        address _lenderAddress,
        uint256 amount,
        uint256 interest,
        uint256 duration,
        uint256 startDate,
        uint256 endDate,
        uint256 collateral,
        uint256 onSale,
        string memory tokenURI
    ) public {
        uint256 newItemId = _tokenIdCounter;

        _safeMint(_lenderAddress, newItemId);
        _setTokenURI(newItemId, tokenURI);

        ExchangeNFT memory exchangeNFT = ExchangeNFT(
            newItemId,
            _borrowerAddress,
            _lenderAddress,
            amount,
            interest,
            duration,
            startDate,
            endDate,
            false,
            collateral,
            onSale
        );

        ExchangeNFT memory LenderNFT = exchangeNFT;
        ExchangeNFT memory BorrowerNFT = exchangeNFT;

        // totalNFTs[_tokenIdCounter] = exchangeNFT;
        totalLenderNFTs[_totalLenderNFTCount] = LenderNFT;
        totalBorrowerNFTs[_totalBorrowerNFTCount] = BorrowerNFT;

        _tokenIdCounter += 1;
        _totalLenderNFTCount += 1;
        _totalBorrowerNFTCount += 1;
        // return exchangeNFT;
    }

    function acceptLenderOffer(
        address lenderAddress,
        address borrowerAddress,
        uint256 lenderId,
        uint256 borrowerId,
        uint256 lendAmountId,
        uint256 amount,
        uint256 interest,
        uint256 duration,
        uint256 startDate,
        uint256 endDate,
        uint256 collateral // address _lenderAddress, // address _borrowerAddress, // uint256 _lendAmountId
    ) public payable {
        mintNFT(
            lenderAddress,
            borrowerAddress,
            amount,
            interest,
            duration,
            startDate,
            endDate,
            collateral,
            0,
            ""
        );

        // myLenderToNFTMapping[lenderId].push(newNFT);

        // totalLenderNFTs[lenderNFTCount] = newNFT;

        // lenderNFTCount++;

        payable(address(this)).transfer(msg.value);
        payable(lenderAddress).transfer(msg.value);

        // addToRestrictList(borrowerAddress);
        // addToRestrictList(lenderAddress);

        // myBorrowerToNFTMapping[borrowerId].push(newNFT);

        // totalBorrowerNFTs[borrowerNFTCount] = newNFT;

        // borrowerNFTCount++;

        payable(borrowerAddress).transfer(amount);
    }

    function acceptBorrowerOffer(
        address lenderAddress,
        address borrowerAddress,
        uint256 lenderId,
        uint256 borrowerId,
        uint256 amount,
        uint256 interest,
        uint256 duration,
        uint256 startDate,
        uint256 endDate,
        uint256 collateral
    ) public payable {
        mintNFT(
            lenderAddress,
            borrowerAddress,
            amount,
            interest,
            duration,
            startDate,
            endDate,
            collateral,
            0,
            ""
        );


        // addToRestrictList(borrowerAddress);
        // addToRestrictList(lenderAddress);
        // myLenderToNFTMapping[lenderId].push(newNFT);
        // totalLenderNFTs[lenderNFTCount] = newNFT;

        // lenderNFTCount++;
        payable(lenderAddress).transfer(collateral);
        // myBorrowerToNFTMapping[borrowerId].push(newNFT);
        // totalBorrowerNFTs[borrowerNFTCount] = newNFT;
        // borrowerNFTCount++;

        payable(borrowerAddress).transfer(amount);
    }

    //Fetch functions for NFTs

    function fetchLenderNFTs(
        address _lenderAddress
    ) public view returns (ExchangeNFT[] memory) {
        // uint256 _lenderId = userAddressToIdMapping[_lenderAddress];
        uint256 count = 0;
        for (uint256 i = 0; i < _tokenIdCounter; i++) {
            if (totalLenderNFTs[i].lenderAddress == _lenderAddress) {
                count += 1;
            }
        }

        ExchangeNFT[] memory result = new ExchangeNFT[](count);
        count = 0;
        for (uint256 i = 0; i < _tokenIdCounter; i++) {
            if (totalLenderNFTs[i].lenderAddress == _lenderAddress) {
                ExchangeNFT storage res = totalLenderNFTs[i];
                result[count++] = res;
            }
        }

        return result;
    }

    function fetchBorrowerNFTs(
        address _borrowerAddress
    ) public view returns (ExchangeNFT[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < _tokenIdCounter; i++) {
            if (totalLenderNFTs[i].borrowerAddress == _borrowerAddress) {
                count += 1;
            }
        }

        ExchangeNFT[] memory result = new ExchangeNFT[](count);
        count = 0;
        for (uint256 i = 0; i < _tokenIdCounter; i++) {
            if (totalLenderNFTs[i].borrowerAddress == _borrowerAddress) {
                ExchangeNFT storage res = totalLenderNFTs[i];
                result[count++] = res;
            }
        }

        return result;
    }

    function createSale(uint256 id, uint256 price) public {
        totalLenderNFTs[id].onSale = price;
    }

    function fetchAllSaleItems() public view returns (ExchangeNFT[] memory) {
        uint256 count = 0;
        for (uint i = 0; i < _tokenIdCounter; i++) {
            if (totalLenderNFTs[i].onSale > 0) {
                count += 1;
            }
        }
        ExchangeNFT[] memory result = new ExchangeNFT[](count);
        count = 0;
        for (uint i = 0; i < _tokenIdCounter; i++) {
            if (totalLenderNFTs[i].onSale > 0) {
                ExchangeNFT storage cur = totalLenderNFTs[i];
                result[count++] = cur;
            }
        }

        return result;
    }

    function changeOwner(address newOwner, uint256 id) public payable {
        payable(address(this)).transfer(msg.value);
        payable(totalLenderNFTs[id].lenderAddress).transfer(msg.value);

        totalLenderNFTs[id].onSale = 0;
        totalLenderNFTs[id].lenderAddress = newOwner;
    }

    function payToNFT(uint256 id) public payable {
        payable(address(this)).transfer(msg.value);
        payable(totalLenderNFTs[id].lenderAddress).transfer(msg.value);
    }

    function finalPayment(uint256 id) public payable {
        payable(address(this)).transfer(msg.value);
        payable(totalLenderNFTs[id].lenderAddress).transfer(msg.value);

        totalLenderNFTs[id].isPaid = true;
    }
}