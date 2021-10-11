import axios from "axios";

export const vetrina = axios.create({
  baseURL: "https://api.vetrinalive.com/api",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer xTQrxzVU59KGKxccyaGWkytMzuLuvEfdGQR8lY0xpTYNLD2VfiVyYRVCmHCrKSeaSspU7KfdElvP7afiu",
  },
});
