const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const { ethers } = require("ethers");
const { Database } = require("@tableland/sdk");

const usersTable = "users_table_80001_8191";
const lendersTable = "lenders_table_80001_8190";
const borrowsTable = "borrows_table_80001_8189";

const privateKey =
  "0x7a62aa11fa06bc5f21ef8819674ce87876b678f7e288b9c8347fdd3eff7faf89";
const provider = new ethers.providers.JsonRpcProvider(
  "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"
);
const wallet = new ethers.Wallet(privateKey, provider);
const signer = wallet.connect(provider);
const db = new Database({ signer });

exports.addUser = async(req, res) => {
    try {
        const { username, email, accountAddress } = req.body;
        const { results } = await db
            .prepare(`SELECT * FROM ${usersTable} WHERE email='${email}';`)
            .all();

    if (results.length === 0) {
      const data = await db.prepare(`SELECT * FROM ${usersTable};`).all();

      const { meta: insert } = await db
        .prepare(
          `INSERT INTO ${usersTable} (id, userName, accountAddress, emailId) VALUES (?, ?, ?, ?);`
        )
        .bind(data.results.length + 1, username, email, accountAddress)
        .run();

      await insert.txn.wait();
    }

    const data = await db.prepare(`SELECT * FROM ${usersTable};`).all();
    const userObj = data.results[data.results.length - 1];
    console.log("CREATED USR", userObj);

    return res.status(200).json({
      user_instance: userObj,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.getUserInfo = async(req, res) => {
    try {
        const { accountAddress } = req.params;
        const { results } = await db
            .prepare(
                `SELECT * FROM ${usersTable} WHERE account_address='${accountAddress}';`
            )
            .all();

    if (results.length !== 0) {
      return res.status(200).json({
        user: results[results.length - 1],
      });
    }

    return res.status(404).json({
      message: "User Not found",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const { results } = await db
      .prepare(`SELECT * FROM ${usersTable} WHERE id='${userId}';`)
      .all();

    if (results.length !== 0) {
      return res.status(200).json({
        user: results[results.length - 1],
      });
    }

    return res.status(404).json({
      message: "User Not found",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.addLendAmount = async (req, res) => {
  try {
    const {
      userId,
      amount,
      interest,
      duration,
      startDate,
      endDate,
      collateral,
    } = req.body;

    const data1 = await db.prepare(`SELECT * FROM ${lendersTable};`).all();

        const { meta: insert } = await db
            .prepare(
                `INSERT INTO ${lendersTable} (id, userId, amount, interest, start_date, end_date, isPaid, collateral) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`
            )
            .bind(
                data1.results.length + 1,
                userId,
                amount,
                interest,
                startDate,
                endDate,
                false,
                collateral
            )
            .run();

    await insert.txn.wait();

    const data = await db.prepare(`SELECT * FROM ${lendersTable};`).all();
    const lendObj = data.results[data.results.length - 1];
    console.log("Lend object created");

    return res.status(200).json({
      lendObj: lendObj,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.addBorrowAmount = async(req, res) => {
    try {
        const {
            userId,
            amount,
            interest,
            startDate,
            endDate,
            collateral,
        } = req.body;

    const data1 = await db.prepare(`SELECT * FROM ${borrowsTable};`).all();

        const { meta: insert } = await db
            .prepare(
                `INSERT INTO ${borrowsTable} (id, user_id, amount, interest, start_date, end_date, is_paid, collateral) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`
            )
            .bind(
                data1.results.length + 1,
                userId,
                amount,
                interest,
                startDate,
                endDate,
                false,
                collateral
            )
            .run();

    await insert.txn.wait();

    const data = await db.prepare(`SELECT * FROM ${borrowsTable};`).all();
    const borrowObj = data.results[data.results.length - 1];
    console.log("Lend object created");

    return res.status(200).json({
      borrowObj: borrowObj,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.acceptLendOffer = async (req, res) => {
  try {
    const { lendId } = req.params;
    const { meta: deleteMeta } = await db
      .prepare(`DELETE FROM ${lendersTable} where id=${lendId};`)
      .run();

    await deleteMeta.txn.wait();

    return res.status(200).json({
      message: "Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.acceptBorrowOffer = async (req, res) => {
  try {
    const { borrowId } = req.params;
    const { meta: deleteMeta } = await db
      .prepare(`DELETE FROM ${borrowsTable} where id=${borrowId};`)
      .run();

    await deleteMeta.txn.wait();

    return res.status(200).json({
      message: "Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.fetchLendAmountByLender = async (req, res) => {
  try {
    const { lenderId } = req.params;
    const data = await db
      .prepare(`SELECT * FROM ${lendersTable} where userId=${lenderId};`)
      .all();
    console.log("Lend object fetched");

    return res.status(200).json({
      result: data.results,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.fetchBorrowAmountByBorrower = async (req, res) => {
  try {
    const { borrowId } = req.params;
    const data = await db
      .prepare(`SELECT * FROM ${borrowsTable} where userId=${borrowId};`)
      .all();
    console.log("Lend object fetched");

    return res.status(200).json({
      result: data.results,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.fetchTotalLendAmounts = async (req, res) => {
  try {
    const data = await db.prepare(`SELECT * FROM ${lendersTable}`);
    return res.status(200).json({
      result: data.results,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.fetchTotalBorrowAmounts = async (req, res) => {
  try {
    const data = await db.prepare(`SELECT * FROM ${borrowsTable}`);
    return res.status(200).json({
      result: data.results,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.fetchLendAmountById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db
      .prepare(`SELECT * FROM ${lendersTable} where id=${id};`)
      .all();
    const lendObj = data.results[data.results.length - 1];
    console.log("Lend object fetched");

    return res.status(200).json({
      lendObj,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.fetchBorrowAmountById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db
      .prepare(`SELECT * FROM ${borrowsTable} where id=${id};`)
      .all();
    const borrowObj = data.results[data.results.length - 1];
    console.log("Lend object fetched");

    return res.status(200).json({
      borrowObj,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.fetchSpecificLendAmountByLender = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db
      .prepare(`SELECT * FROM ${lendersTable} where id=${id};`)
      .all();
    const lendObj = data.results[data.results.length - 1];
    console.log("Lend object fetched");

    return res.status(200).json({
      lendObj,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.fetchSpecificBorrowAmountByBorrower = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db
      .prepare(`SELECT * FROM ${borrowsTable} where id=${id};`)
      .all();
    const borrowObj = data.results[data.results.length - 1];
    console.log("Lend object fetched");

    return res.status(200).json({
      borrowObj,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
