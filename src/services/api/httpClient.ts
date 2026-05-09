import { create } from 'axios';

import { storage } from '@/services/storage/storage';
import { storageKeys } from '@/services/storage/storageKeys';

export const httpClient = create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(async (config) => {
  const token = await storage.getString(storageKeys.authToken);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
