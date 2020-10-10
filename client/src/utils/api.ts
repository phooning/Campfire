import Axios, { AxiosResponse } from "axios";
import { getStoredAuthToken, removeStoredAuthToken } from "./token";
import { objectToQueryString } from "./url";

const defaults = {
  baseURL: process.env.API_URL || "http://localhost:8080",
  headers: () => ({
    "Content-Type": "application/json",
    Authorization: getStoredAuthToken()
      ? `Bearer ${getStoredAuthToken()}`
      : undefined,
  }),
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

type APIWrapperResponse<T> = Promise<AxiosResponse<T>>;

const apiWrapper = <T, R>(
  method,
  url: string,
  variables: R
): APIWrapperResponse<T> =>
  new Promise((resolve, reject) => {
    Axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          if (error.response.data.error.code === "INVALID_TOKEN") {
            removeStoredAuthToken();
            // eslint-disable-next-line no-restricted-globals
            history.pushState({}, "Authenticate", "/authenticate");
          } else {
            reject(error.response.data.error);
          }
        } else {
          reject(defaults.error);
        }
      }
    );
  });

const api = {
  get: <T, S>(url: string, variables: S): APIWrapperResponse<T> =>
    apiWrapper("get", url, variables),
  post: <T, S>(url: string, variables: S): APIWrapperResponse<T> =>
    apiWrapper("post", url, variables),
  put: <T, S>(url: string, variables: S): APIWrapperResponse<T> =>
    apiWrapper("put", url, variables),
  patch: <T, S>(url: string, variables: S): APIWrapperResponse<T> =>
    apiWrapper("patch", url, variables),
  delete: <T, S>(url: string, variables: S): APIWrapperResponse<T> =>
    apiWrapper("delete", url, variables),
};

export default api;
