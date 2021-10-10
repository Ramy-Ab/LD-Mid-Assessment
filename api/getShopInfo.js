import { vetrina } from "../helpers/axiosInstances";

export const getShopInfo = async (url) => {
  var error;
  try {
    var { data } = await vetrina.get(url);
  } catch (e) {
    error = e;
  }
  return { data, error };
};
