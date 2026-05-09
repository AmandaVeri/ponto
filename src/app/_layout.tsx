import { Stack } from 'expo-router';
import React from 'react';

import { AppProvider } from '@/providers/AppProvider';
import '@/global.css';

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth" />
      </Stack>
    </AppProvider>
  );
}
