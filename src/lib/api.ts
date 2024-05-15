import { useRouter } from "next/navigation";
import useInterCeptor from "./interceptor";
import { CreateOrderAnonymousType, LoginType, SignupType } from "./types";
import { deleteAllCookies } from "./utils";

// Define the return type of the useApiHelper function

const useApiHelper = () => {
  const router = useRouter();
  const axios = useInterCeptor();

  const api = {
    login: (data: LoginType, params = {}) =>
      axios.post(`/user/storefront/api/login/`, data, { params: params }),
    signUp: (data: SignupType, params = {}) =>
      axios.post(`/user/storefront/api/signup/`, data, {
        params: params,
      }),
    logout: () => {
      deleteAllCookies();
      localStorage.removeItem("user-store");
      router.push("/");
    },
    getCategories: (params = {}) =>
      axios.get(`/product/storefront/api/categories/`, {
        params: params,
      }),
    getProducts: (params = {}) =>
      axios.get(`/product/storefront/api/products/`, {
        params: params,
      }),
    createOrderAnonymous: (data: CreateOrderAnonymousType, params = {}) => {
      const { payment_method, ...newData } = data;

      return axios.post(
        `/order/storefront/api/anonymous-user-order-create/${payment_method}/`,
        newData,
        { params: params }
      );
    },
  };

  return api;
};

export default useApiHelper;
