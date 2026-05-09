import React from 'react';
import { View } from 'react-native';

import { employeeStyles } from '@/styles/employeeStyles';
import type { TimeClockType } from '@/types/timeTracking/timeClock';
import { TimeClockButton } from './TimeClockButton';

type TimeClockGridProps = {
  disabled?: boolean;
  onTimeClockPress: (type: TimeClockType) => void;
};

const timeClockActions = [
  {
    type: 'entry',
    label: 'Entrada',
    iconName: 'log-in',
    style: employeeStyles.entryButton,
  },
  {
    type: 'lunch_out',
    label: 'Saída p/ almoço',
    iconName: 'coffee',
    style: employeeStyles.lunchOutButton,
  },
  {
    type: 'lunch_return',
    label: 'Volta do almoço',
    iconName: 'corner-up-left',
    style: employeeStyles.lunchReturnButton,
  },
  {
    type: 'exit',
    label: 'Saída',
    iconName: 'log-out',
    style: employeeStyles.exitButton,
  },
] as const;

export function TimeClockGrid({ disabled, onTimeClockPress }: TimeClockGridProps) {
  return (
    <View style={employeeStyles.buttonGrid}>
      {timeClockActions.map((action) => (
        <TimeClockButton
          key={action.type}
          type={action.type}
          label={action.label}
          iconName={action.iconName}
          style={action.style}
          disabled={disabled}
          onPress={onTimeClockPress}
        />
      ))}
    </View>
  );
}
