import { Tabs } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppTheme } from '@/hooks/useAppTheme';
import { employeeTabs } from '@/navigation/employeeTabs';
import { AppIcon } from '@/shared/components/icons/AppIcon';
import { getBottomTabBarStyle } from '@/styles/bottomTabs';

export default function EmployeeTabsLayout() {
  const { t } = useTranslation();
  const { colors } = useAppTheme();

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.disabled,
        tabBarLabelStyle: {
          fontWeight: '700',
        },
        tabBarStyle: getBottomTabBarStyle(colors),
      }}>
      {employeeTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: t(tab.labelKey),
            tabBarLabel: t(tab.labelKey),
            tabBarIcon: ({ color, size }) => <AppIcon name={tab.icon} size={size} color={color} style={{ fontWeight: '700' }} />,
            ...tab.options,
          }}
        />
      ))}
    </Tabs>
  );
}
