const fetch = require("node-fetch");
const chunk = require("lodash/chunk");
const flatten = require("lodash/flatten");
const { BN, fromWei } = require("web3-utils");

async function getBalanceOfListAccountWithTotal(addresses = []) {
  const batches = chunk(addresses, 20);

  const promised = batches.map(async (batch) => {
    const url = `https://api-goerli.etherscan.io/api?module=account&action=balancemulti&address=${batch.join(
      ","
    )}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`;
    const response = await fetch(url);
    const balances = await response.json();
    return balances.result;
  });

  const response = await Promise.all(promised);
  const addressesWithBalance = flatten(response);
  const totalBalance = addressesWithBalance
    .reduce((ans, data) => {
      return ans.add(BN(data.balance));
    }, BN("0"))
    .toString();
  return {
    addresses: addressesWithBalance,
    totalBalance,
  };
}

module.exports = { getBalanceOfListAccountWithTotal };
