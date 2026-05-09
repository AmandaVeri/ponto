import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';

import { useCurrentTime } from '@/hooks/timeTracking/useCurrentTime';
import { useTimeClock } from '@/hooks/timeTracking/useTimeClock';
import { AppCard } from '@/shared/components/cards';
import { IconHelper } from '@/shared/components/icons/IconHelper';
import { ScreenContainer } from '@/shared/components/layout';
import { AppModal } from '@/shared/components/modal';
import { useAppTheme } from '@/hooks/useAppTheme';
import { textStyles } from '@/styles/text';
import type { TimeClockType } from '@/types/timeTracking/timeClock';
import { EmployeeCheckDetailsContent } from './details';

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

export function EmployeeCheckScreen() {
  const { t } = useTranslation('common');
  const { colors } = useAppTheme();
  const currentTime = useCurrentTime();
  const { summary, isRegistering, handleTimeClock } = useTimeClock();
  const [isConfirmationOpen, setIsConfirmationOpen] = React.useState(false);
  const [selectedAction, setSelectedAction] = React.useState<ClockAction | null>(null);

  const actions: ClockAction[] = [
    { type: 'entry', labelKey: 'employeeCheck.actions.entry', iconName: 'log-in', bgColor: 'secondary' },
    { type: 'lunch_out', labelKey: 'employeeCheck.actions.lunchOut', iconName: 'coffee', bgColor: 'warning' },
    { type: 'lunch_return', labelKey: 'employeeCheck.actions.lunchReturn', iconName: 'corner-up-left', bgColor: 'info' },
    { type: 'exit', labelKey: 'employeeCheck.actions.exit', iconName: 'log-out', bgColor: 'error' },
  ];

  async function onPressAction(action: ClockAction) {
    const success = await handleTimeClock(action.type);
    if (!success) return;
    setSelectedAction(action);
    setIsConfirmationOpen(true);
  }

  return (
    <>
      <ScreenContainer contentStyle={styles.screenContent}>
        <LinearGradient colors={[colors.secondary, '#61B96D']} style={styles.currentTimeCard}>
          <Text style={[textStyles.h4, textStyles.weightBold, { color: colors.tertiary }]}>{t('employeeCheck.currentTime')}</Text>
          <Text style={[textStyles.displayClock, textStyles.weightExtraBold, { color: colors.tertiary }]}>{currentTime}</Text>
        </LinearGradient>

        <AppCard style={styles.summaryCard}>
          <View style={styles.summarySection}>
            <Text style={[textStyles.h4, textStyles.weightBold, { color: colors.primary }]}>{t('employeeCheck.lastMark')}</Text>
            <Text style={[textStyles.displayStat, textStyles.weightExtraBold, { color: colors.primary }]}>{summary.lastMark}</Text>
          </View>

          <View style={[styles.summaryDivider, { backgroundColor: colors.border }]} />

          <View style={styles.summarySection}>
            <Text style={[textStyles.h4, textStyles.weightBold, { color: colors.primary }]}>{t('employeeCheck.workedHoursToday')}</Text>
            <Text style={[textStyles.displayStat, textStyles.weightExtraBold, { color: colors.primary }]}>{summary.workedHoursToday}</Text>
          </View>
        </AppCard>

        <View style={styles.buttonGrid}>
          {actions.map((action) => (
            <LinearGradient
              key={action.type}
              colors={[colors[action.bgColor], ACTION_GRADIENT_END[action.bgColor]]}
              style={[styles.timeClockButton, { opacity: isRegistering ? 0.65 : 1 }]}>
              <Pressable disabled={isRegistering} onPress={() => onPressAction(action)} style={styles.timeClockButtonPressable}>
                <View style={styles.timeClockIconWrap}>
                  <IconHelper provider="Feather" name={action.iconName} size={36} color={colors.tertiary} />
                </View>
                <View style={styles.timeClockTextWrap}>
                  <Text style={[textStyles.buttonLabelLg, textStyles.center, textStyles.weightExtraBold, { color: colors.tertiary }]}>
                    {t(action.labelKey)}
                  </Text>
                </View>
              </Pressable>
            </LinearGradient>
          ))}
        </View>
      </ScreenContainer>

      <AppModal visible={isConfirmationOpen} onClose={() => setIsConfirmationOpen(false)} size="full">
        <EmployeeCheckDetailsContent
          title={t('employeeCheck.confirmPoint.title')}
          successTitle={t('employeeCheck.confirmPoint.successTitle')}
          timestamp={`${new Date().toLocaleDateString('pt-BR')} às ${currentTime}`}
          locationLabel={t('employeeCheck.confirmPoint.locationLabel')}
          locationValue={t('employeeCheck.confirmPoint.locationValue')}
          typeLabel={t('employeeCheck.confirmPoint.typeLabel')}
          typeValue={selectedAction ? t(selectedAction.labelKey) : '—'}
          confirmLabel={t('employeeCheck.confirmPoint.confirmButton')}
          onConfirm={() => setIsConfirmationOpen(false)}
        />
      </AppModal>
    </>
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
});
