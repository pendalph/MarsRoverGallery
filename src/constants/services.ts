// eslint-disable-next-line no-shadow
export enum ErrorStatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export const API_URL = 'https://api.nasa.gov/';
