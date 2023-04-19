import axios from 'axios';
import type {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const axiosClient = axios.create({
  // TODO: add your APIs URL (preferably through an environment variable)
  baseURL: '',
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[axios request error]:`, JSON.stringify(error));
  return Promise.reject(error.response?.data);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[axios response error]:`, JSON.stringify(error));
  return Promise.reject(error.response?.data);
};

axiosClient.interceptors.request.use(onRequest, onRequestError);
axiosClient.interceptors.response.use(onResponse, onResponseError);

export { axiosClient };
