// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

contract LoanContract {

    struct User{
        string userId;
        string userName;
        string userAddress;
    }

    struct LendAmount {
        uint256 amount;
        uint256 interest;
        uint256 duration;
        uint256 startDate;
        uint256 endDate;
        bool isPaid;
    }

    struct BorrowAmount {
        uint256 amount;
        uint256 interest;
        uint256 duration;
        uint256 startDate;
        uint256 endDate;
        bool isPaid;
    }

    uint256 userCount;

    mapping (uint256 => User) public users;
    mapping (uint256 => LendAmount[]) public lendAmounts;
    mapping (uint256 => BorrowAmount[]) public borrowAmounts;

    mapping (address => uint256) public userAddressToIdMapping;
    mapping (uint256 => uint256) public totalLendAmount;
    mapping (uint256 => uint256) public totalBorrowAmount;

    mapping(address => User) addressToUserMapping;

    function fetchUserById(uint256 userid) public view returns (User memory) {
        return users[userId];
    }

    function fetchUserByAddress(address userAddress) public view returns (User memory) {
        return addressToUserMapping[userAddress];
    }       

    function addUser(string memory _userName, string memory _userAddress) public {
        users[userCount] = User(userCount, _userName, _userAddress);
        addressToUserMapping[_userAddress] = User(userCount, _userName, _userAddress);
        userAddressToIdMapping[_userAddress] = userCount;
        userCount++;
    }

    function addLendAmount(uint256 _userId, uint256 _amount, uint256 _interest, uint256 _duration, uint256 _startDate, uint256 _endDate) public {
        lendAmounts[_userId].push(LendAmount(_amount, _interest, _duration, _startDate, _endDate, false));
        totalLendAmount[_userId] += _amount;
    }

    function addBorrowAmount(uint256 _userId, uint256 _amount, uint256 _interest, uint256 _duration, uint256 _startDate, uint256 _endDate) public {
        borrowAmounts[_userId].push(BorrowAmount(_amount, _interest, _duration, _startDate, _endDate, false));
        totalBorrowAmount[_userId] += _amount;
    }
}