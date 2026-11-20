import apiClient from "../../../core/api/apiClient";

export const teamApi = {
  getAll: async (params) => {
    const response = await apiClient.get("/team", { params });
    return response.data;
  },
};
