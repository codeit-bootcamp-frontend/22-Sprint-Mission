import { ENV } from '@/shared/apis/env';
import {
  getErrorMessage,
  NETWORK_ERROR_MESSAGE,
} from '@/shared/apis/errorMessages';

type RequestOptions = RequestInit & {
  params?: Record<string, string>;
  customErrorMessage?: string;
};

async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, headers, customErrorMessage, ...rest } = options;

  const base = ENV.API_BASE_URL.replace(/\/$/, '');
  const path = endpoint.replace(/^\//, '');
  const url = new URL(`${base}/${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  try {
    const response = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...rest,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      const finalMessage =
        customErrorMessage || error.message || getErrorMessage(response.status);
      throw new Error(finalMessage);
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(NETWORK_ERROR_MESSAGE);
    }
    throw error;
  }
}

export const get = <T>(endpoint: string, options?: RequestOptions) =>
  request<T>(endpoint, { ...options, method: 'GET' });

export const post = <T>(endpoint: string, options?: RequestOptions) =>
  request<T>(endpoint, { ...options, method: 'POST' });

export const put = <T>(endpoint: string, options?: RequestOptions) =>
  request<T>(endpoint, { ...options, method: 'PUT' });

export const del = <T>(endpoint: string, options?: RequestOptions) =>
  request<T>(endpoint, { ...options, method: 'DELETE' });
