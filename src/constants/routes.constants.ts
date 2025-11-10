export const ROUTES = {
  MARKETING_ROOT: '/',
  SAAS_ROOT: '/portal',

  SIGN_UP: '/portal/auth/sign-up',
  SIGN_IN: '/portal/auth/sign-in',
  FORGOT_PASSWORD: '/portal/auth/forgot-password',
  RESET_PASSWORD: '/portal/auth/reset-password',

  USERS_ROOT: '/portal/users', //Access: Admin
};

export const ADMIN_ROUTES = {
  ROOT: ROUTES.SAAS_ROOT,
  USERS_ROOT: ROUTES.USERS_ROOT,
};
