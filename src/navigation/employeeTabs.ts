import type { ComponentProps } from 'react';
import type { Tabs } from 'expo-router';
import type { AppIconName } from '@/shared/components/icons/AppIcon';

export type EmployeeTabName = 'check' | 'historic' | 'profile';

type TabsScreenProps = ComponentProps<typeof Tabs.Screen>;

export const employeeTabs: {
  name: EmployeeTabName;
  labelKey: 'common:tabs.employee.check' | 'common:tabs.employee.historic' | 'common:tabs.employee.profile';
  icon: AppIconName;
  options?: TabsScreenProps['options'];
}[] = [
  {
    name: 'check',
    labelKey: 'common:tabs.employee.check',
    icon: 'timeClock',
  },
  {
    name: 'historic',
    labelKey: 'common:tabs.employee.historic',
    icon: 'history',
  },
  {
    name: 'profile',
    labelKey: 'common:tabs.employee.profile',
    icon: 'profile',
  },
];
