import apiClient from "../../../core/api/apiClient";

export const adminApi = {
  getDashboard: async () => {
    const response = await apiClient.get("/admin/dashboard");
    return response.data;
  },
};
