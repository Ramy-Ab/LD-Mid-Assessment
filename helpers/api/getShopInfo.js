import { vetrina } from "../axiosInstances";

export const getShopInfo = async (url) => {
  console.log("im in shop");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer TQrxzVU59KGKxccyaGWkytMzuLuvEfdGQR8lY0xpTYNLD2VfiVyYRVCmHCrKSeaSspU7KfdElvP7afiu`,
    },
  };
  try {
    const { data } = await vetrina.get(url, config);
    return data;
  } catch (e) {
    console.log(e);
  }
};
