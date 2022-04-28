const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartScheme = new Schema(
  {
    symbolName: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    openRate: {
      type: Number,
      required: true,
    },
    currentRate: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cart', cartScheme);
