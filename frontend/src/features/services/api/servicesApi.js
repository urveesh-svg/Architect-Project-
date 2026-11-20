import apiClient from "../../../core/api/apiClient";

export const servicesApi = {
  getAll: async (params) => {
    const response = await apiClient.get("/services", { params });
    return response.data;
  },
};
