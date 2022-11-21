require("dotenv").config();

const { isAddress } = require("web3-utils");
const express = require("express");
const bodyParser = require("body-parser");
const { getBalanceOfListAccountWithTotal } = require("./utils");

const app = express();
app.use(bodyParser.json());

app.post(
  "/api/total-balance",
  (req, res, next) => {
    let isValid = true;
    if (
      req.body &&
      req.body.addresses &&
      Array.isArray(req.body.addresses) &&
      req.body.addresses.length <= 100 &&
      req.body.addresses.length > 0
    ) {
      const addresses = req.body.addresses;
      for (let i = 0; i < addresses.length; i += 1) {
        if (!isAddress(addresses[i])) {
          isValid = false;
          break;
        }
      }
    } else {
      isValid = false;
    }

    if (isValid) {
      next();
    } else {
      res.status = 400;
      res.json({ error: "wrong body" });
    }
  },
  (req, res) => {
    const { addresses } = req.body;

    getBalanceOfListAccountWithTotal(addresses)
      .then((data) => {
        res.status = 200;
        res.json(data);
      })
      .catch(() => {
        res.status = 500;
        res.json({ error: "Internal server error" });
      });
  }
);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
});
