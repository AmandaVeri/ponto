import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { AppButton } from '@/shared/components/buttons';
import { AppCard } from '@/shared/components/cards';
import { Screen } from '@/shared/components/layout';
import { AppBadge, AppChip } from '@/shared/components/ui';
import { useAppTheme } from '@/hooks/useAppTheme';

export function DashboardScreen() {
  const { t } = useTranslation(['dashboard', 'common']);
  const { colors } = useAppTheme();

  return (
    <Screen>
      <Text style={[styles.title, { color: colors.text }]}>{t('dashboard:title')}</Text>
      <Text style={{ color: colors.textMuted }}>{t('dashboard:subtitle')}</Text>

      <AppCard>
        <AppBadge label="Enterprise-ready" tone="success" />
        <Text style={[styles.cardTitle, { color: colors.text }]}>Feature-first + shared architecture</Text>
        <AppChip label="Expo Router" />
        <Link href="/(tabs-employee)/check/details" asChild>
          <AppButton title={t('common:tabs.employee.check')} />
        </Link>
      </AppCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: '800' },
  cardTitle: { fontSize: 18, fontWeight: '700' },
});
