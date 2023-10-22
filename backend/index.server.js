const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// import routes
const userRouter = require("./routes/user.route");

const allowCORS = (req, res, next) => {
    var origin = req.get("origin");
    res.header("Access-Control-Allow-Origin", origin);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
};

app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    console.log("[+] Listening on PORT: " + PORT);
});