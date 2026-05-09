import React from 'react';
import { Text, View } from 'react-native';

import { useCurrentTime } from '../hooks/useCurrentTime';
import { employeeStyles } from '@/styles/employeeStyles';

export function CurrentTimeCard() {
  const currentTime = useCurrentTime();

  return (
    <View style={employeeStyles.currentTimeCard}>
      <Text style={employeeStyles.currentTimeLabel}>Horário atual</Text>
      <Text style={employeeStyles.currentTimeValue}>{currentTime}</Text>
    </View>
  );
}
