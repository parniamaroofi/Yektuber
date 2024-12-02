import axios from "axios";

export const customAxiosInstance = axios.create({
  baseURL: "https://apiresulto.hoodadtechnology.ir",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
