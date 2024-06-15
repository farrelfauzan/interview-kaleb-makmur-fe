import { AxiosError } from "axios";
import { Api } from "../swagger/api";

const api = new Api({
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
    // Add any headers you need for all requests
  },
});

api.instance.interceptors.request.use(
  (config) => {
    console.log("Request", config.url);

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.instance.interceptors.response.use(
  async (response) => {
    console.log("Service Response ...");
    return response;
  },
  async (error: AxiosError) => {
    // console.log("error", error.response?.data.message);

    if (error.response?.status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
