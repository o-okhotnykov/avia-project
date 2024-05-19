import { BASE_URL } from "@/constants/api";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpService {
  baseUrl: string;

  service: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.service = axios.create({ baseURL: baseUrl });
  }

  request<T>(params: AxiosRequestConfig) {
    return this.service.request(params) as Promise<AxiosResponse<T>>;
  }

  get<T>(path: string, payload?: Partial<AxiosRequestConfig>) {
    return this.request<T>({
      method: "GET",
      url: path,
      responseType: "json",
      ...payload,
    });
  }

  post<T>(path: string, payload: unknown) {
    return this.request<T>({
      method: "POST",
      url: path,
      data: payload,
    });
  }

  patch<T>(path: string, payload: Partial<AxiosRequestConfig> = {}) {
    return this.request<T>({
      method: "PATCH",
      url: path,
      ...payload,
    });
  }

  delete<T>(path: string, payload: Partial<AxiosRequestConfig> = {}) {
    return this.request<T>({
      method: "delete",
      url: path,
      ...payload,
    });
  }
}

export const httpService = new HttpService(BASE_URL);
