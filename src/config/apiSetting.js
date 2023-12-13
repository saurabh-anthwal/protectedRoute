import axios from "axios";
const apiUrl = "https://restorant-app100.onrender.com/api/v1";

export const client = axios.create({
  baseURL: apiUrl,
});

export const clientWithHeader = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer token`,
  },
});
