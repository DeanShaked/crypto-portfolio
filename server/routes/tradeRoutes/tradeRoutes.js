const express = require("express");
const tradeController = require("../../controller/tradeController/tradeController");

const route = express.Router();

route.post("/new-asset", tradeController.createNewAsset);
route.get("/get-all-positions", tradeController.getAllPositions);
route.get("/delete", tradeController.removePosition);

module.exports = route;
