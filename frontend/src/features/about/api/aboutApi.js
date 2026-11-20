import apiClient from "../../../core/api/apiClient";

export const aboutApi = {
  getAll: async (params) => {
    const response = await apiClient.get("/about", { params });
    return response.data;
  },
};
