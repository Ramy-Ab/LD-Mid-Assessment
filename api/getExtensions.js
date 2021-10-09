import { vetrina } from "../helpers/axiosInstances";

export const getExtensions = async () => {
  var error;
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer TQrxzVU59KGKxccyaGWkytMzuLuvEfdGQR8lY0xpTYNLD2VfiVyYRVCmHCrKSeaSspU7KfdElvP7afiu`,
    },
  };
  try {
    var { data } = await vetrina.get(
      "/admin/store-features?shop_id=3105",
      config
    );
  } catch (e) {
    error = e.response.data;
  }
  return { extensions: data, errorExtensions: error };
};
