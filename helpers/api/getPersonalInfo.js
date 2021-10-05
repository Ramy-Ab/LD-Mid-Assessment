import { vetrina } from "../axiosInstances";

export const getPersonalInfo = async (url) => {
  console.log("data : ");
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
