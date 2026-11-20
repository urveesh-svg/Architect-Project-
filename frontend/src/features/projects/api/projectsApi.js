import apiClient from "../../../core/api/apiClient";

export const projectsApi = {
  getAll: async (params) => {
    const response = await apiClient.get("/projects", { params });
    return response.data;
  },
};
