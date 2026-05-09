import { Tabs } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppTheme } from '@/hooks/useAppTheme';
import { adminTabs } from '@/navigation/adminTabs';
import { AppIcon } from '@/shared/components/icons/AppIcon';
import { DrawerMenuButton } from '@/shared/components/navigation/DrawerMenuButton';

export default function AdminTabsLayout() {
  const { t } = useTranslation();
  const { colors } = useAppTheme();

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: true,
        headerLeft: () => <DrawerMenuButton />,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
      }}>
      {adminTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={`${tab.name}/index`}
          options={{
            title: t(tab.labelKey),
            tabBarLabel: t(tab.labelKey),
            tabBarIcon: ({ color, size }) => <AppIcon name={tab.icon} size={size} color={color} />,
            ...tab.options,
          }}
        />
      ))}
    </Tabs>
  );
}
