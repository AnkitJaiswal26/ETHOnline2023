// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import "hardhat/console.sol";

import "./NFT.sol";

contract LoanContract {

    struct User{
        uint256 userId;
        string userName;
        address userAddress;
    }

    struct LendAmount {
        uint256 lendAmountId;
        uint256 amount;
        uint256 interest;
        uint256 duration;
        uint256 startDate;
        uint256 endDate;
        bool isPaid;
        uint256 collateral;
    }

    struct BorrowAmount {
        uint256 borrowAmountId;
        uint256 amount;
        uint256 interest;
        uint256 duration;
        uint256 startDate;
        uint256 endDate;
        bool isPaid;
        uint256 collateral;
    }

    uint256 userCount;
    uint256 lendAmountCount;
    uint256 borrowAmountCount;

    mapping (uint256 => User) public users;
    mapping (uint256 => LendAmount[]) public userToLendAmountMapping;
    mapping (uint256 => BorrowAmount[]) public userToBorrowAmountMapping;

    mapping (uint256 => LendAmount) public lendAmounts;
    mapping (uint256 => BorrowAmount) public borrowAmounts;

    mapping (uint256 => NFT[]) public lenderToNFTMapping; 
    mapping (uint256 => NFT[]) public borrowerToNFTMapping; 

    mapping (address => uint256) public userAddressToIdMapping;
    mapping (uint256 => uint256) public totalLendAmount;
    mapping (uint256 => uint256) public totalBorrowAmount;

    mapping(address => User) addressToUserMapping;

    function fetchUserById(uint256 userId) public view returns (User memory) {
        return users[userId];
    }

    function fetchUserByAddress(address userAddress) public view returns (User memory) {
        return addressToUserMapping[userAddress];
    }       

    function addUser(string memory _userName, address _userAddress) public {
        users[userCount] = User(userCount, _userName, _userAddress);
        addressToUserMapping[_userAddress] = users[userCount];
        userAddressToIdMapping[_userAddress] = userCount;
        userCount++;
    }

    function addLendAmount(address _userAddress, uint256 _amount, uint256 _interest, uint256 _duration, uint256 _startDate, uint256 _endDate, uint256 _collateral) public {
        uint256 _userId = userAddressToIdMapping[_userAddress];
        userToLendAmountMapping[_userId].push(LendAmount(lendAmountCount, _amount, _interest, _duration, _startDate, _endDate, false, _collateral));
        totalLendAmount[_userId] += _amount;
        lendAmountCount++;
    }

    function addBorrowAmount(address _userAddress, uint256 _amount, uint256 _interest, uint256 _duration, uint256 _startDate, uint256 _endDate, uint256 _collateral) public {
        uint256 _userId = userAddressToIdMapping[_userAddress];

        userToBorrowAmountMapping[_userId].push(BorrowAmount(borrowAmountCount, _amount, _interest, _duration, _startDate, _endDate, false, _collateral));
        totalBorrowAmount[_userId] += _amount;
        borrowAmountCount++;
    }

    function acceptLenderOffer(address _lenderAddress, address _borrowerAddress, uint256 _lendAmountId) public payable {
        uint256 _lenderId = userAddressToIdMapping[_lenderAddress];

        uint256 _borrowerId = userAddressToIdMapping[_borrowerAddress];

        // require(userToLendAmountMapping[_lenderId][_lendAmountId].isPaid == false);

        uint256 length = userToLendAmountMapping[_lenderId].length;
        LendAmount memory la;

        for (uint i = 0; i < length; i++) {
            if(_lendAmountId == userToLendAmountMapping[_lenderId][i].lendAmountId) {
                la = userToLendAmountMapping[_lenderId][i];
            }
        }

        lenderToNFTMapping[_lenderId].push(new NFT(_lenderAddress, _borrowerAddress, la.lendAmountId));

        payable(_lenderAddress).transfer(la.collateral);

        borrowerToNFTMapping[_borrowerId].push(new NFT(_lenderAddress, _borrowerAddress, la.lendAmountId));
        
        payable(_borrowerAddress).transfer(la.amount);
        
    }

    function acceptBorrowerOffer(address _lenderAddress, address _borrowerAddress, uint256 _borrowAmountId) public payable {
        uint256 _lenderId = userAddressToIdMapping[_lenderAddress];

        uint256 _borrowerId = userAddressToIdMapping[_borrowerAddress];
        // require(userToLendAmountMapping[_lenderId][_borrowAmountId].isPaid == false);

        uint256 length = userToBorrowAmountMapping[_borrowerId].length;
        BorrowAmount memory ba;

        for (uint i = 0; i < length; i++) {
            if(_borrowAmountId == userToBorrowAmountMapping[_borrowerId][i].borrowAmountId) {
                ba = userToBorrowAmountMapping[_borrowerId][i];
            }
        }

        lenderToNFTMapping[_lenderId].push(new NFT(_lenderAddress, _borrowerAddress, ba.borrowAmountId));

        payable(_lenderAddress).transfer(ba.collateral);

        borrowerToNFTMapping[_borrowerId].push(new NFT(_lenderAddress, _borrowerAddress, ba.borrowAmountId));
        
        payable(_borrowerAddress).transfer(ba.amount);
        
    }

    // function payLendAmount(uint256 _userId, uint256 _amount) public {
    //     uint256 totalAmount = totalLendAmount[_userId];
    //     require(totalAmount >= _amount, "Amount is greater than total amount");
    //     totalLendAmount[_userId] -= _amount;
    // }

    // function payBorrowAmount(uint256 _userId, uint256 _amount) public {
    //     uint256 totalAmount = totalBorrowAmount[_userId];
    //     require(totalAmount >= _amount, "Amount is greater than total amount");
    //     totalBorrowAmount[_userId] -= _amount;
    // }

    // function getLendAmounts(uint256 _userId) public view returns (LendAmount[] memory) {
    //     return lendAmounts[_userId];
    // }

    // function getBorrowAmounts(uint256 _userId) public view returns (BorrowAmount[] memory) {
    //     return borrowAmounts[_userId];
    // }

    // function getTotalLendAmount(uint256 _userId) public view returns (uint256) {
    //     return totalLendAmount[_userId];
    // }

    // function getTotalBorrowAmount(uint256 _userId) public view returns (uint256) {
    //     return totalBorrowAmount[_userId];
    // }

    // function getUserCount() public view returns (uint256) {
    //     return userCount;
    // }



}