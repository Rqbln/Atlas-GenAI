export const APP_ROUTES = {
  PUBLIC: {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },
  PRIVATE: {},
  ERROR: {
    NOT_FOUND: "*",
    UNAUTHORIZED: "/401",
  },
} as const;

export type AppRoute = typeof APP_ROUTES;
