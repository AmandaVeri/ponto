import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, type PropsWithChildren } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { queryClient } from '@/services/api';
import { initI18n } from '@/services/i18n';
import { useAppTheme } from '@/hooks/useAppTheme';

export function AppProvider({ children }: PropsWithChildren) {
  const [isI18nReady, setIsI18nReady] = useState(false);
  const { scheme, colors } = useAppTheme();

  useEffect(() => {
    initI18n().finally(() => setIsI18nReady(true));
  }, []);

  if (!isI18nReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
          {children}
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
