import { vetrina } from "../axiosInstances";

export const getShopInfo = async (url) => {
  var error;
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer TQrxzVU59KGKxccyaGWkytMzuLuvEfdGQR8lY0xpTYNLD2VfiVyYRVCmHCrKSeaSspU7KfdElvP7afiu`,
    },
  };
  try {
    var { data } = await vetrina.get(url, config);
  } catch (e) {
    error = e.response.data;
  }
  return { data, error };
};
