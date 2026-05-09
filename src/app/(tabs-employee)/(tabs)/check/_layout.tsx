import { Stack } from 'expo-router';
import React from 'react';

import { DrawerMenuButton } from '@/shared/components/navigation/DrawerMenuButton';

export default function CheckStack() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Check',
          headerLeft: () => <DrawerMenuButton />,
        }}
      />
    </Stack>
  );
}
