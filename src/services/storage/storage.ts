import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  getString: (key: string) => AsyncStorage.getItem(key),
  setString: (key: string, value: string) => AsyncStorage.setItem(key, value),
  remove: (key: string) => AsyncStorage.removeItem(key),
  getJSON: async <T>(key: string): Promise<T | null> => {
    const value = await AsyncStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  },
  setJSON: <T>(key: string, value: T) => AsyncStorage.setItem(key, JSON.stringify(value)),
};
