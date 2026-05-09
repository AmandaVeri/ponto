import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { IconHelper } from '@/shared/components/icons/IconHelper';
import { employeeStyles } from '@/styles/employeeStyles';
import { employeeTheme } from '@/styles/theme';

type EmployeeTabName = 'timeClock' | 'history' | 'profile';

type EmployeeBottomTabsProps = {
  activeTab?: EmployeeTabName;
  onTabPress?: (tab: EmployeeTabName) => void;
};

const tabs = [
  { name: 'timeClock', label: 'Ponto', icon: 'clock' },
  { name: 'history', label: 'Histórico', icon: 'clipboard' },
  { name: 'profile', label: 'Perfil', icon: 'user' },
] as const;

export function EmployeeBottomTabs({ activeTab = 'timeClock', onTabPress }: EmployeeBottomTabsProps) {
  return (
    <View style={employeeStyles.bottomTabs}>
      <View style={employeeStyles.bottomTabRow}>
        {tabs.map((tab) => {
          const isActive = tab.name === activeTab;
          const color = isActive ? employeeTheme.colors.primary : employeeTheme.colors.tabInactive;

          return (
            <Pressable key={tab.name} onPress={() => onTabPress?.(tab.name)} style={employeeStyles.bottomTabItem}>
              <IconHelper provider="Feather" name={tab.icon} size={26} color={color} />
              <Text
                style={[
                  employeeStyles.bottomTabLabel,
                  isActive ? employeeStyles.bottomTabLabelActive : employeeStyles.bottomTabLabelInactive,
                ]}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View style={employeeStyles.homeIndicator} />
    </View>
  );
}
