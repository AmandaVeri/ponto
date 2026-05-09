import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { IconHelper } from '@/shared/components/icons/IconHelper';
import { employeeStyles } from '@/styles/employeeStyles';
import { employeeTheme } from '@/styles/theme';

type EmployeeHeaderProps = {
  employeeName: string;
  dateLabel: string;
};

export function EmployeeHeader({ employeeName, dateLabel }: EmployeeHeaderProps) {
  return (
    <View style={employeeStyles.header}>
      <Pressable accessibilityLabel="Abrir menu" style={employeeStyles.headerButton}>
        <IconHelper provider="Feather" name="menu" size={34} color={employeeTheme.colors.text} />
      </Pressable>

      <View style={employeeStyles.greetingWrapper}>
        <Text style={employeeStyles.greeting}>
          Olá, <Text style={employeeStyles.greetingName}>{employeeName}</Text>
        </Text>
        <Text style={employeeStyles.date}>{dateLabel}</Text>
      </View>

      <Pressable accessibilityLabel="Abrir notificações" style={employeeStyles.headerButton}>
        <IconHelper provider="Feather" name="bell" size={30} color={employeeTheme.colors.text} />
        <View style={employeeStyles.notificationDot} />
      </Pressable>
    </View>
  );
}
