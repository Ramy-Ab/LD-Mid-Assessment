import axios from "axios";

export const vetrina = axios.create({
  baseURL: "https://api.vetrinalive.com/api",
});
