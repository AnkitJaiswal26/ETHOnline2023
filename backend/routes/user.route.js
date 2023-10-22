const express = require("express");

const router = express.Router();

const {
    addUser,
    getUserInfo,
    getUserById,
    addLendAmount,
    addBorrowAmount,
    acceptLendOffer,
    acceptBorrowOffer,
    fetchLendAmountByLender,
    fetchBorrowAmountByBorrower,
    fetchTotalLendAmounts,
    fetchTotalBorrowAmounts,
    fetchLendAmountById,
    fetchBorrowAmountById,
    fetchSpecificLendAmountByLender,
    fetchSpecificBorrowAmountByBorrower,
} = require("../controllers/user.controller");

router.post("/register", addUser);
router.get("/getUserInfo/{accountAddress}", getUserInfo);
router.get("/getUserById/{userId}", getUserById);
router.post("/addLendAmount", addLendAmount);
router.post("/addBorrowAmount", addBorrowAmount);
router.delete("/acceptLendOffer/{lendId}", acceptLendOffer);
router.delete("/acceptBorrowOffer/{borrowId}", acceptBorrowOffer);
router.get("/fetchLendAmountByLender/{lenderId}", fetchLendAmountByLender);
router.get(
    "/fetchBorrowAmountByBorrower/{borrowId}",
    fetchBorrowAmountByBorrower
);
router.get("/fetchTotalLendAmounts", fetchTotalLendAmounts);
router.get("/fetchTotalBorrowAmounts", fetchTotalBorrowAmounts);
router.get("/fetchLendAmountById/{id}", fetchLendAmountById);
router.get("/fetchBorrowAmountById/{id}", fetchBorrowAmountById);
router.get(
    "/fetchSpecificLendAmountByLender/{id}",
    fetchSpecificLendAmountByLender
);
router.get(
    "/fetchSpecificBorrowAmountByBorrower/{id}",
    fetchSpecificBorrowAmountByBorrower
);

module.exports = router;