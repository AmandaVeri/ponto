import type { ComponentProps } from 'react';
import type { Tabs } from 'expo-router';

export type AppTabName = 'opcao-1' | 'opcao-2' | 'opcao-3';

type TabsScreenProps = ComponentProps<typeof Tabs.Screen>;

export const appTabs: {
  name: AppTabName;
  labelKey: 'common:tabs.option1' | 'common:tabs.option2' | 'common:tabs.option3';
  icon: {
    provider: 'Ionicons' | 'Feather' | 'MaterialIcons';
    name: string;
  };
  options?: TabsScreenProps['options'];
}[] = [
  {
    name: 'opcao-1',
    labelKey: 'common:tabs.option1',
    icon: { provider: 'Ionicons', name: 'home-outline' },
  },
  {
    name: 'opcao-2',
    labelKey: 'common:tabs.option2',
    icon: { provider: 'Feather', name: 'users' },
  },
  {
    name: 'opcao-3',
    labelKey: 'common:tabs.option3',
    icon: { provider: 'MaterialIcons', name: 'access-time' },
  },
];
