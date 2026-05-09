import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useCurrentTime } from '@/hooks/timeTracking/useCurrentTime';
import { useTimeClock } from '@/hooks/timeTracking/useTimeClock';
import { AppCard } from '@/shared/components/cards';
import { IconHelper } from '@/shared/components/icons/IconHelper';
import { ScreenContainer } from '@/shared/components/layout';
import { useAppTheme } from '@/hooks/useAppTheme';
import { textStyles } from '@/styles/text';
import type { TimeClockType } from '@/types/timeTracking/timeClock';

type ClockAction = {
  type: TimeClockType;
  labelKey: string;
  iconName: 'log-in' | 'coffee' | 'corner-up-left' | 'log-out';
  bgColor: 'primary' | 'orange' | 'blue' | 'red';
};

export function DashboardScreen() {
  const { t } = useTranslation('common');
  const { colors } = useAppTheme();
  const currentTime = useCurrentTime();
  const { summary, isRegistering, handleTimeClock } = useTimeClock();

  const actions: ClockAction[] = [
    { type: 'entry', labelKey: 'employeeCheck.actions.entry', iconName: 'log-in', bgColor: 'primary' },
    { type: 'lunch_out', labelKey: 'employeeCheck.actions.lunchOut', iconName: 'coffee', bgColor: 'orange' },
    { type: 'lunch_return', labelKey: 'employeeCheck.actions.lunchReturn', iconName: 'corner-up-left', bgColor: 'blue' },
    { type: 'exit', labelKey: 'employeeCheck.actions.exit', iconName: 'log-out', bgColor: 'red' },
  ];

  return (
    <ScreenContainer contentStyle={styles.screenContent}>
      <View style={[styles.currentTimeCard, { backgroundColor: colors.secondary }]}>
        <Text style={[styles.currentTimeLabel, { color: colors.tertiary }]}>{t('employeeCheck.currentTime')}</Text>
        <Text style={[styles.currentTimeValue, { color: colors.tertiary }]}>{currentTime}</Text>
      </View>

      <AppCard style={styles.summaryCard}>
        <View style={styles.summarySection}>
          <Text style={[styles.summaryLabel, { color: colors.primary }]}>{t('employeeCheck.lastMark')}</Text>
          <Text style={[styles.summaryValue, { color: colors.primary }]}>{summary.lastMark}</Text>
        </View>

        <View style={[styles.summaryDivider, { backgroundColor: colors.border }]} />

        <View style={styles.summarySection}>
          <Text style={[styles.summaryLabel, { color: colors.primary }]}>{t('employeeCheck.workedHoursToday')}</Text>
          <Text style={[styles.summaryValue, { color: colors.primary }]}>{summary.workedHoursToday}</Text>
        </View>
      </AppCard>

      <View style={styles.buttonGrid}>
        {actions.map((action) => (
          <Pressable
            key={action.type}
            disabled={isRegistering}
            onPress={() => handleTimeClock(action.type)}
            style={[
              styles.timeClockButton,
              { backgroundColor: colors[action.bgColor], opacity: isRegistering ? 0.65 : 1 },
            ]}>
            <View style={styles.timeClockIconWrap}>
              <IconHelper provider="Feather" name={action.iconName} size={36} color={colors.tertiary} />
            </View>
            <View style={styles.timeClockTextWrap}>
              <Text style={[styles.timeClockButtonText, { color: colors.tertiary }]}>{t(action.labelKey)}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  screenContent: {
    padding: 12,
    gap: 18,
  },
  currentTimeCard: {
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 150,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  currentTimeLabel: {
    fontSize: 26,
    lineHeight: 34,
    ...textStyles.weightBold,
  },
  currentTimeValue: {
    fontSize: 64,
    lineHeight: 74,
    ...textStyles.weightExtraBold,
  },
  summaryCard: {
    marginTop: -16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 26,
    paddingHorizontal: 22,
    gap: 18,
  },
  summarySection: {
    alignItems: 'center',
    gap: 8,
  },
  summaryLabel: {
    fontSize: 22,
    lineHeight: 28,
    ...textStyles.weightBold,
  },
  summaryValue: {
    fontSize: 42,
    lineHeight: 50,
    ...textStyles.weightExtraBold,
  },
  summaryDivider: {
    height: 1,
    width: '100%',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  timeClockButton: {
    flexBasis: '48%',
    flexGrow: 1,
    minHeight: 126,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingHorizontal: 8,
  },
  timeClockIconWrap: {
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeClockTextWrap: {
    minHeight: 56,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  timeClockButtonText: {
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    ...textStyles.weightExtraBold,
  },
});
