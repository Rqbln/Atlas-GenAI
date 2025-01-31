const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
  },
  USER: {
    PROFILE: '/users/me',
    SETTINGS: '/users/settings',
  },
  PORTFOLIO: {
    BASE: '/portfolios',
    DETAIL: (id: string) => `/portfolios/${id}`,
    TRANSACTIONS: (id: string) => `/portfolios/${id}/transactions`,
  },
} as const;

export default API_ENDPOINTS;
