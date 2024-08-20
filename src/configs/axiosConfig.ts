import { hideErrorMessage, showErrorMessage } from "@/features/drawSlide";
import { hideLoading } from "@/features/loadingSlide";
import axios, { AxiosRequestConfig } from "axios";
import queryString from "query-string";
import { useDispatch } from "react-redux";
const requestAuth = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  paramsSerializer: {
    serialize: (params: any) =>
      queryString.stringify(params, { arrayFormat: "comma" }),
  },
});

export const HttpCommon = ({ children }: any) => {
  const dispatch = useDispatch();
  // config request
  const middlewareRequest = async (config: any) => {
    try {
      let temp = {
        ...config,
        headers: {
          ...config?.headers,
          "Accept-Language": "vi",
        },
      };
      if (config?.disableToken) {
        return temp;
      }

      if (config.url.includes("/oauth")) {
        return temp;
      }

      return {
        ...temp,
        headers: {
          ...temp.headers,
          //   Authorization: `Bearer ${token?.accessToken}`,
        },
      };
    } catch (err: any) {}
  };

  //   config response
  const middlewareResponse = async (response: any) => {
    try {
      if (response?.data?.responseCode !== "0000") {
        dispatch(hideLoading({}));
        dispatch(
          showErrorMessage({ errorMessage: response?.data?.responseCode }),
        );
        return response;
      }
      dispatch(hideErrorMessage({}));
      return response;
    } catch (err: any) {
      dispatch(hideLoading({}));
      return Promise.reject(err);
    }
  };

  let subscribers: any = [];
  // config response error
  const middlewareResponseError = async (error: any) => {
    try {
      if (error && error?.config) {
        const { config } = error;
        const originalRequest = config;
        if (error?.response?.status === 401) {
          //   config error 401
          return new Promise((resolve) => {
            subscribers.push((accessToken: any) => {
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
              resolve(axios(originalRequest));
            });
          });
        }
        dispatch(hideLoading({}));
        return Promise.reject(error?.message);
      }
    } catch (err: any) {
      dispatch(hideLoading({}));
      return Promise.reject(err);
    }
  };

  requestAuth.interceptors.request.use(middlewareRequest, (error: any) =>
    Promise.reject(error),
  );

  requestAuth.interceptors.response.use(
    middlewareResponse,
    middlewareResponseError,
  );

  return children;
};

export const axiosConfig = (options: AxiosRequestConfig) => {
  return requestAuth({
    ...options,
    headers: { ...options.headers },
  });
};
