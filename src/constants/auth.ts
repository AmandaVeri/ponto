export const AUTH_ROLE = {
  ADMIN: 'admin',
  EMPLOYEE: 'employee',
} as const;

export type AuthRole = (typeof AUTH_ROLE)[keyof typeof AUTH_ROLE];
