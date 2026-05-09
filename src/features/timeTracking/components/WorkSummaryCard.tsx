import React from 'react';
import { Text, View } from 'react-native';

import { AppCard } from '@/shared/components/cards';
import { employeeStyles } from '@/styles/employeeStyles';

type WorkSummaryCardProps = {
  lastMark: string;
  workedHoursToday: string;
};

export function WorkSummaryCard({ lastMark, workedHoursToday }: WorkSummaryCardProps) {
  return (
    <AppCard style={employeeStyles.summaryCard}>
      <View style={employeeStyles.summarySection}>
        <Text style={employeeStyles.summaryLabel}>Última marcação</Text>
        <Text style={employeeStyles.summaryValue}>{lastMark}</Text>
      </View>

      <View style={employeeStyles.summaryDivider} />

      <View style={employeeStyles.summarySection}>
        <Text style={employeeStyles.summaryLabel}>Horas trabalhadas hoje</Text>
        <Text style={employeeStyles.summaryValue}>{workedHoursToday}</Text>
      </View>
    </AppCard>
  );
}
