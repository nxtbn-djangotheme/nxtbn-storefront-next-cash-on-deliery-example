import axios from "axios";
import Cookies from "js-cookie";
import { deleteAllCookies } from "./utils";

export const API_URL = process.env.API_URL || "http://127.0.0.1:8000";

const useInterCeptor = () => {
  const instance = axios.create({
    baseURL: API_URL, // the baseURL will be same as django by default
    timeout: 10000,
  });

  instance.defaults.timeout = 10000;
  instance.defaults.headers.common["Content-Type"] = "application/json";
  instance.defaults.headers.common["Accept"] = "application/json";
  instance.defaults.headers.common["Accept-Language"] = "en";

  instance.interceptors.request.use(
    (config) => {
      const authToken = Cookies.get("accessToken");
      if (authToken) {
        config.headers["Authorization"] = "Bearer " + authToken;
      }
      return config;
    },
    (error) => {
      throw new Error(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 500) {
        var custtomErr = {
          // structured it based django error standard
          response: {
            data: {
              server: ["Standard: Internal Server Error"],
            },
          },
        };
        throw custtomErr;
      } else if (error.response.status === 401) {
        const refreshToken = Cookies.get("refreshToken");

        const response = await instance.post("/user/storefront/api/refresh/", {
          refresh_token: refreshToken,
        });

        if (response.status === 200) {
          // setting the access token into cookies
          Cookies.set("accessToken", response.data.token.access);

          return instance(error.config);
        }

        deleteAllCookies();

        window.location.href = "/login";
      }
      throw error
    }
  );

  return instance;
};

export default useInterCeptor;
