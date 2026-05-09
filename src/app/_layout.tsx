import { Stack } from 'expo-router';
import React from 'react';

import { AppProvider } from '@/providers/AppProvider';
import '@/global.css';

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs-employee)" />
        <Stack.Screen name="(tabs-admin)" />
      </Stack>
    </AppProvider>
  );
}
