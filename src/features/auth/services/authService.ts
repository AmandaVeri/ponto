import { httpClient } from '@/services/api';
import { storage } from '@/services/storage/storage';
import { storageKeys } from '@/services/storage/storageKeys';

type SignInPayload = {
  email: string;
  password: string;
};

type SignInResponse = {
  accessToken: string;
};

export const authService = {
  signIn: async (payload: SignInPayload) => {
    const { data } = await httpClient.post<SignInResponse>('/auth/sign-in', payload);
    await storage.setString(storageKeys.authToken, data.accessToken);
    return data;
  },
  signOut: async () => {
    await storage.remove(storageKeys.authToken);
  },
};
