import authEn from '@/translations/en/auth.json';
import commonEn from '@/translations/en/common.json';
import dashboardEn from '@/translations/en/dashboard.json';
import authEs from '@/translations/es/auth.json';
import commonEs from '@/translations/es/common.json';
import dashboardEs from '@/translations/es/dashboard.json';
import authPt from '@/translations/pt/auth.json';
import commonPt from '@/translations/pt/common.json';
import dashboardPt from '@/translations/pt/dashboard.json';

export const defaultNS = 'common';
export const namespaces = ['common', 'auth', 'dashboard'] as const;
export type TranslationNamespace = (typeof namespaces)[number];

export const resources = {
  en: { common: commonEn, auth: authEn, dashboard: dashboardEn },
  es: { common: commonEs, auth: authEs, dashboard: dashboardEs },
  pt: { common: commonPt, auth: authPt, dashboard: dashboardPt },
} as const;

export type SupportedLanguage = keyof typeof resources;
