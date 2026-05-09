import type { ComponentProps } from 'react';
import type { Tabs } from 'expo-router';

export type AdminTabName = 'dashboard' | 'employees' | 'records' | 'reports';

type TabsScreenProps = ComponentProps<typeof Tabs.Screen>;

export const adminTabs: {
  name: AdminTabName;
  labelKey:
    | 'common:tabs.admin.dashboard'
    | 'common:tabs.admin.employees'
    | 'common:tabs.admin.records'
    | 'common:tabs.admin.reports';
  icon: {
    provider: 'Ionicons' | 'Feather' | 'MaterialIcons';
    name: string;
  };
  options?: TabsScreenProps['options'];
}[] = [
  {
    name: 'dashboard',
    labelKey: 'common:tabs.admin.dashboard',
    icon: { provider: 'Ionicons', name: 'grid-outline' },
  },
  {
    name: 'employees',
    labelKey: 'common:tabs.admin.employees',
    icon: { provider: 'Feather', name: 'users' },
  },
  {
    name: 'records',
    labelKey: 'common:tabs.admin.records',
    icon: { provider: 'MaterialIcons', name: 'fact-check' },
  },
  {
    name: 'reports',
    labelKey: 'common:tabs.admin.reports',
    icon: { provider: 'Ionicons', name: 'bar-chart-outline' },
  },
];
