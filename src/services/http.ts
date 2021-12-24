import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_URL, ErrorStatusCode } from '_app/constants/services';

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
};

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance !== null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      ...headers,
      baseURL: API_URL,
      withCredentials: true,
    });

    http.interceptors.response.use(
      response => response,
      error => {
        const { response } = error;
        return this.handleError(response);
      },
    );

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  private handleError(error: { status: any }) {
    const { status } = error;

    switch (status) {
      case ErrorStatusCode.InternalServerError: {
        console.log('TODO: added error hanler');
        break;
      }
      case ErrorStatusCode.Forbidden: {
        console.log('TODO: added error hanler');
        break;
      }
      case ErrorStatusCode.Unauthorized: {
        console.log('TODO: added error hanler');
        break;
      }
      case ErrorStatusCode.TooManyRequests: {
        console.log('TODO: added error hanler');
        break;
      }
      default:
        break;
    }

    return Promise.reject(error);
  }
}

export const http = new Http();
