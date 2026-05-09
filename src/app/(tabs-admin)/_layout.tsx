import { Tabs } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppTheme } from '@/hooks/useAppTheme';
import { adminTabs } from '@/navigation/adminTabs';
import { IconHelper } from '@/shared/components/icons/IconHelper';

export default function AdminTabsLayout() {
  const { t } = useTranslation();
  const { colors } = useAppTheme();

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
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
          name={tab.name}
          options={{
            title: t(tab.labelKey),
            tabBarLabel: t(tab.labelKey),
            tabBarIcon: ({ color, size }) => (
              <IconHelper provider={tab.icon.provider} name={tab.icon.name} size={size} color={color} />
            ),
            ...tab.options,
          }}
        />
      ))}
    </Tabs>
  );
}
