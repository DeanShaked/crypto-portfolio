const AssetSchema = require('../../models/AssetSchema');

exports.createNewAsset = async (req, res, next) => {
  try {
    const body = req.body;
    const newAsset = await AssetSchema(body);
    await newAsset.save();
    return res.status(200).json({ message: 'New Trade!' });
  } catch (error) {
    return res.status(401).json({ message: 'Error!' });
  }
};
