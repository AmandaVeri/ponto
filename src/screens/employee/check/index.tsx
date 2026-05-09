import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';

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
  bgColor: 'secondary' | 'warning' | 'info' | 'error';
};

const ACTION_GRADIENT_END: Record<ClockAction['bgColor'], string> = {
  secondary: '#61B96D',
  warning: '#E6A93A',
  info: '#5A9CF2',
  error: '#E06464',
};

export function DashboardScreen() {
  const { t } = useTranslation('common');
  const { colors } = useAppTheme();
  const currentTime = useCurrentTime();
  const { summary, isRegistering, handleTimeClock } = useTimeClock();

  const actions: ClockAction[] = [
    { type: 'entry', labelKey: 'employeeCheck.actions.entry', iconName: 'log-in', bgColor: 'secondary' },
    { type: 'lunch_out', labelKey: 'employeeCheck.actions.lunchOut', iconName: 'coffee', bgColor: 'warning' },
    { type: 'lunch_return', labelKey: 'employeeCheck.actions.lunchReturn', iconName: 'corner-up-left', bgColor: 'info' },
    { type: 'exit', labelKey: 'employeeCheck.actions.exit', iconName: 'log-out', bgColor: 'error' },
  ];

  return (
    <ScreenContainer contentStyle={styles.screenContent}>
      <LinearGradient colors={[colors.secondary, '#61B96D']} style={styles.currentTimeCard}>
        <Text style={[styles.currentTimeLabel, { color: colors.tertiary }]}>{t('employeeCheck.currentTime')}</Text>
        <Text style={[styles.currentTimeValue, { color: colors.tertiary }]}>{currentTime}</Text>
      </LinearGradient>

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
          <LinearGradient
            key={action.type}
            colors={[colors[action.bgColor], ACTION_GRADIENT_END[action.bgColor]]}
            style={[styles.timeClockButton, { opacity: isRegistering ? 0.65 : 1 }]}>
            <Pressable disabled={isRegistering} onPress={() => handleTimeClock(action.type)} style={styles.timeClockButtonPressable}>
              <View style={styles.timeClockIconWrap}>
                <IconHelper provider="Feather" name={action.iconName} size={36} color={colors.tertiary} />
              </View>
              <View style={styles.timeClockTextWrap}>
                <Text style={[styles.timeClockButtonText, { color: colors.tertiary }]}>{t(action.labelKey)}</Text>
              </View>
            </Pressable>
          </LinearGradient>
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
    marginTop: -30,
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
  timeClockButtonPressable: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
