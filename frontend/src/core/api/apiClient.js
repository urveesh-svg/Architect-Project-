import axios from "axios";
import { ENV } from "../config/environment";

const apiClient = axios.create({
  baseURL: ENV.API_URL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default apiClient;
