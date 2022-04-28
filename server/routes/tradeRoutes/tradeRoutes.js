const express = require('express');
const tradeController = require('../../controller/tradeController/tradeController');

const route = express.Router();

route.post('/new-asset', tradeController.createNewAsset);

module.exports = route;
