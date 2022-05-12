const AssetSchema = require("../../models/AssetSchema");

exports.createNewAsset = async (req, res, next) => {
  try {
    const body = req.body;
    console.log("body", body);
    // Send new asset to DB
    const newAsset = await AssetSchema(body);
    await newAsset.save();
    return res.status(200).json({ message: body });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

exports.getAllPositions = async (req, res, next) => {
  try {
    const allPositions = await AssetSchema.find();
    return res.status(200).json({ message: allPositions });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

exports.removePosition = async (req, res, next) => {
  try {
    const { positionId } = req;
    const positionDelted = AssetSchema.find(positionId);
    const res = AssetSchema.findByIdAndDelete(positionId);
    return res.status(200).json({ message: positionDelted });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};
