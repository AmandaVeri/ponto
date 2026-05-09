import type { ComponentProps } from 'react';
import type { Tabs } from 'expo-router';
import type { AppIconName } from '@/shared/components/icons/AppIcon';

export type AdminTabName = 'dashboard' | 'employees' | 'records' | 'reports';

type TabsScreenProps = ComponentProps<typeof Tabs.Screen>;

export const adminTabs: {
  name: AdminTabName;
  labelKey:
    | 'common:tabs.admin.dashboard'
    | 'common:tabs.admin.employees'
    | 'common:tabs.admin.records'
    | 'common:tabs.admin.reports';
  icon: AppIconName;
  options?: TabsScreenProps['options'];
}[] = [
  {
    name: 'dashboard',
    labelKey: 'common:tabs.admin.dashboard',
    icon: 'dashboard',
  },
  {
    name: 'employees',
    labelKey: 'common:tabs.admin.employees',
    icon: 'employees',
  },
  {
    name: 'records',
    labelKey: 'common:tabs.admin.records',
    icon: 'records',
  },
  {
    name: 'reports',
    labelKey: 'common:tabs.admin.reports',
    icon: 'reports',
  },
];
