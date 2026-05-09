import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { storageKeys } from '@/services/storage/storageKeys';
import { defaultNS, resources, type SupportedLanguage } from './resources';

const fallbackLanguage: SupportedLanguage = 'pt';
const i18n = createInstance();

function normalizeLanguage(language?: string | null): SupportedLanguage {
  const baseLanguage = language?.split('-')[0] as SupportedLanguage | undefined;
  return baseLanguage && baseLanguage in resources ? baseLanguage : fallbackLanguage;
}

export async function initI18n() {
  if (i18n.isInitialized) {
    return i18n;
  }

  const persistedLanguage = await AsyncStorage.getItem(storageKeys.language);
  const deviceLanguage = Localization.getLocales()[0]?.languageTag;

  await i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng: normalizeLanguage(persistedLanguage ?? deviceLanguage),
    fallbackLng: fallbackLanguage,
    defaultNS,
    ns: Object.keys(resources[fallbackLanguage]),
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  return i18n;
}

export async function changeLanguage(language: SupportedLanguage) {
  await i18n.changeLanguage(language);
  await AsyncStorage.setItem(storageKeys.language, language);
}

export { i18n };
