import { vetrina } from "../helpers/axiosInstances";
import { errorEvent } from "../helpers/errorHandler";

export const getPersonalInfo = async (url) => {
  var error;
  try {
    var { data } = await vetrina.get(url);
  } catch (e) {
    console.log("errrror : ", errorEvent(e));
    error = errorEvent(e);
  }
  return { data, error };
};
