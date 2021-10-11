import { vetrina } from "../helpers/axiosInstances";
import { errorEvent } from "../helpers/errorHandler";

export const fetcher = async (url) => {
  var error;
  try {
    var { data } = await vetrina.get(url);
  } catch (e) {
    error = errorEvent(e);
  }
  return { data, error };
};
