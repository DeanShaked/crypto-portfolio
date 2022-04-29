import axios from "utils/axios";
import routes from "utils/routes";

/**
 * Get user data
 */
export const getUserData = async () => {
  const { data } = await axios.get(routes._URL_GET_USER_DATA);
  return data;
};
