import apiClient from "../../../core/api/apiClient";

export const contactApi = {
  getAll: async (params) => {
    const response = await apiClient.get("/contact", { params });
    return response.data;
  },
};
