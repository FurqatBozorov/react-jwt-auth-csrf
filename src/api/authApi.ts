import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrfToken="))
    ?.split("=")[1];

  if (csrfToken) {
    config.headers["x-csrf-token"] = csrfToken;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401) {
      await api.post("/refresh", {}, { withCredentials: true });
      return api(error.config);
    }

    return Promise.reject(error);
  },
);

export default api;