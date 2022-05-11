import axios from "axios";
import routes from "../utils/routes";

/**
 * Get account positions
 */
export const getPositions = async () => {
  const { data } = await axios.get(routes._URL_GET_POSITIONS);
  return data;
};


/**### Create New Asset
  @param {Number} assetData asset data 
 */
export const createNewAsset = async (assetData) => {
  const { data } = await axios.post(routes._URL_ADD_NEW_ASSET,assetData);
  return data;
};
