export const isDev = process.env.NODE_ENV === 'development';
export const baseURL = '/api';
export const statusCodes = {
  OK: 200,
  NotFound: 404,
  BindFail: 500
};
