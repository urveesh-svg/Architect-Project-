import apiClient from "../api/apiClient";

export const authService = {
  login: async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  },
  logout: async () => {
    // Implement server-side logout if the backend supports it.
  },
};
