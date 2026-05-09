import React from 'react';
import { Pressable, Text, type StyleProp, type ViewStyle } from 'react-native';

import { IconHelper } from '@/shared/components/icons/IconHelper';
import { employeeStyles } from '@/styles/employeeStyles';
import { employeeTheme } from '@/styles/theme';
import type { TimeClockType } from '@/types/timeTracking/timeClock';

type TimeClockButtonProps = {
  type: TimeClockType;
  label: string;
  iconName: 'log-in' | 'coffee' | 'corner-up-left' | 'log-out';
  style: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress: (type: TimeClockType) => void;
};

export function TimeClockButton({ type, label, iconName, style, disabled, onPress }: TimeClockButtonProps) {
  return (
    <Pressable disabled={disabled} onPress={() => onPress(type)} style={[employeeStyles.timeClockButton, style]}>
      <IconHelper provider="Feather" name={iconName} size={42} color={employeeTheme.colors.surface} />
      <Text style={employeeStyles.timeClockButtonText}>{label}</Text>
    </Pressable>
  );
}
