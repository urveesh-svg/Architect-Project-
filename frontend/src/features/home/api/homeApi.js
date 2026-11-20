import apiClient from "../../../core/api/apiClient";

export const homeApi = {
  getAll: async (params) => {
    const response = await apiClient.get("/home", { params });
    return response.data;
  },
};
