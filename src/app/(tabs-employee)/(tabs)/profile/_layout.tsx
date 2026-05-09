import { Stack } from 'expo-router';
import React from 'react';

import { useAppTheme } from '@/hooks/useAppTheme';
import { DrawerMenuButton } from '@/shared/components/navigation/DrawerMenuButton';
import { getMobileHeaderStyle } from '@/styles/mobileHeader';

export default function ProfileStack() {
  const { colors } = useAppTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: getMobileHeaderStyle(colors),
        headerTintColor: colors.primary,
        headerTitleAlign: 'center',
        headerTitleStyle: { color: colors.primary, fontWeight: '700' },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Profile',
          headerLeft: () => <DrawerMenuButton />,
        }}
      />
    </Stack>
  );
}
