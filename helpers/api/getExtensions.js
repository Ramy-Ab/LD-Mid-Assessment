import { vetrina } from "../axiosInstances";

export const getExtensions = async () => {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer TQrxzVU59KGKxccyaGWkytMzuLuvEfdGQR8lY0xpTYNLD2VfiVyYRVCmHCrKSeaSspU7KfdElvP7afiu`,
    },
  };
  try {
    const { data } = await vetrina.get(
      "/admin/store-features?shop_id=3105",
      config
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
