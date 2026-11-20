import apiClient from "../../../core/api/apiClient";

export const testimonialsApi = {
  getAll: async (params) => {
    const response = await apiClient.get("/testimonials", { params });
    return response.data;
  },
};
