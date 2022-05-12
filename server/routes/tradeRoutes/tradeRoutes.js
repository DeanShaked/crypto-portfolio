const express = require("express");
const tradeController = require("../../controller/tradeController/tradeController");

const route = express.Router();

route.post("/new-asset", tradeController.createNewAsset);
route.get("/open-positions", tradeController.getOpenPositions);
route.get("/close-position", tradeController.closePosition);

module.exports = route;
