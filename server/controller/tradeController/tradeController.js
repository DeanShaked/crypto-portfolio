const AssetSchema = require("../../models/AssetSchema");

exports.createNewAsset = async (req, res, next) => {
  try {
    const assetData = req.body;
    const newAsset = await AssetSchema(assetData);
    await newAsset.save();
    return res.status(200).json({ message: assetData });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

exports.getOpenPositions = async (req, res, next) => {
  try {
    const openPositions = await AssetSchema.find();
    -console.log("openPositions", openPositions);
    return res.status(200).json({ message: openPositions });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

exports.closePosition = async (req, res, next) => {
  try {
    const positionId = req.body;
    const closedPosition = AssetSchema.find(positionId);
    const res = AssetSchema.findByIdAndDelete(positionId);
    return res.status(200).json({ message: closedPosition });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};
