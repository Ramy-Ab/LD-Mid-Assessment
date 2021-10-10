import { vetrina } from "../helpers/axiosInstances";

export const getExtensions = async () => {
  var error;
  try {
    var { data } = await vetrina.get("/admin/store-features?shop_id=3105");
  } catch (e) {
    error = e.response.data;
  }
  return { extensions: data, errorExtensions: error };
};
