import type { ComponentProps } from 'react';
import type { Tabs } from 'expo-router';

export type EmployeeTabName = 'check' | 'historic' | 'profile';

type TabsScreenProps = ComponentProps<typeof Tabs.Screen>;

export const employeeTabs: {
  name: EmployeeTabName;
  labelKey: 'common:tabs.employee.check' | 'common:tabs.employee.historic' | 'common:tabs.employee.profile';
  icon: {
    provider: 'Ionicons' | 'Feather' | 'MaterialIcons';
    name: string;
  };
  options?: TabsScreenProps['options'];
}[] = [
  {
    name: 'check',
    labelKey: 'common:tabs.employee.check',
    icon: { provider: 'Ionicons', name: 'home-outline' },
  },
  {
    name: 'historic',
    labelKey: 'common:tabs.employee.historic',
    icon: { provider: 'Feather', name: 'users' },
  },
  {
    name: 'profile',
    labelKey: 'common:tabs.employee.profile',
    icon: { provider: 'MaterialIcons', name: 'access-time' },
  },
];
