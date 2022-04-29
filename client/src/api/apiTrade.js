import axios from "axios";
import routes from "../utils/routes";

/**
 * Get user data
 */
export const getPositions = async () => {
  const { data } = await axios.get(routes._URL_GET_POSITIONS);
  return data;
};
