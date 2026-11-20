import apiClient from "../../../core/api/apiClient";

export const galleryApi = {
  getAll: async (params) => {
    const response = await apiClient.get("/gallery", { params });
    return response.data;
  },
};
