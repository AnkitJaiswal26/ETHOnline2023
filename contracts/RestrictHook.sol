// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.19;

// import "@openzeppelin/contracts/access/Ownable.sol";
// import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
// import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
// import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";

// contract RestrictHook is Ownable {

//     mapping(address => bool) public RestrictListed;

//     event AddedToRestrictList(address indexed addr);
//     event RemovedFromRestrictList(address indexed addr);

//     IPoolManager public immutable poolManager;

//     constructor(IPoolManager _poolManager) {
//         poolManager = _poolManager;
//         validateHookAddress(this);
//     }

//     modifier poolManagerOnly() {
//         require(msg.sender == address(poolManager), "RestrictHook: Only pool manager");
//         _;
//     }

//     function validateHookAddress(RestictHook _this) internal pure virtual {
//         Hooks.validateHookAddress(_this, getHooksCalls());
//     }

//     function addToRestrictList(address _address){
//         RestrictListed[_address] = true;
//         emit AddedToRestrictList(_address);
//     }

//     function removeFromRestrictList(address _address){
//         RestrictListed[_address] = false;
//         emit RemovedFromRestrictList(_address);
//     }

//     function beforeModifyPosition(address sender, PoolKey calldata, IPoolManager.ModifyPositionParams calldata)
//     external
//     override
//     poolManagerOnly
//     returns (bytes4)
//     {
//         require(RestrictListed[sender], "RestrictHook: Not RestrictListed");
//         return RestrictHook.beforeModifyPosition.selector;
//     }

//     function beforeSwap(address sender, PoolKey calldata key, IPoolManager.SwapParams calldata params)
//     external
//     override
//     poolManagerOnly
//     returns (bytes4)
//     {
//         require(RestrictListed[sender], "RestrictHook: Not RestrictListed");
//         return RestrictHook.beforeSwap.selector;
//     }

//     function getHooksCalls() public pure override returns (Hooks.Calls memory) {
//         return Hooks.Calls({
//             beforeInitialize: false,
//             afterInitialize: false,
//             beforeModifyPosition: true,
//             afterModifyPosition: false,
//             beforeSwap: true,
//             afterSwap: false,
//             beforeDonate: false,
//             afterDonate: false
//         });
//     }
// }