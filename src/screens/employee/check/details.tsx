import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/hooks/useAppTheme';
import { AppButton } from '@/shared/components/buttons';
import { AppCard } from '@/shared/components/cards';
import { IconHelper } from '@/shared/components/icons/IconHelper';
import { textStyles } from '@/styles/text';

type EmployeeCheckDetailsContentProps = {
  title: string;
  successTitle: string;
  timestamp: string;
  locationLabel: string;
  locationValue: string;
  typeLabel: string;
  typeValue: string;
  confirmLabel: string;
  onConfirm: () => void;
};

export function EmployeeCheckDetailsContent({
  title,
  successTitle,
  timestamp,
  locationLabel,
  locationValue,
  typeLabel,
  typeValue,
  confirmLabel,
  onConfirm,
}: EmployeeCheckDetailsContentProps) {
  const { colors } = useAppTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.tertiary }]}>
      <View style={styles.header}>
        <Text style={[textStyles.h6, textStyles.weightBold, { color: colors.primary }]}>{title}</Text>
      </View>

      <View style={styles.body}>
        <View style={[styles.iconWrap, { backgroundColor: colors.secondary }]}>
          <IconHelper provider="Feather" name="check" size={52} color={colors.tertiary} />
        </View>

        <Text style={[textStyles.h3, textStyles.center, textStyles.weightExtraBold, { color: colors.primary }]}>{successTitle}</Text>
        <Text style={[textStyles.h6, textStyles.center, textStyles.weightBold, styles.timestamp, { color: colors.primary }]}>{timestamp}</Text>

        <AppCard style={styles.infoCard}>
          <Text style={[textStyles.h6, textStyles.weightBold, { color: colors.textMuted }]}>{locationLabel}</Text>
          <View style={styles.infoRow}>
            <Text style={[textStyles.h6, textStyles.weightBold, { color: colors.primary }]}>{locationValue}</Text>
            <IconHelper provider="Feather" name="map-pin" size={22} color={colors.primary} />
          </View>
        </AppCard>

        <AppCard style={styles.infoCard}>
          <Text style={[textStyles.h6, textStyles.weightBold, { color: colors.textMuted }]}>{typeLabel}</Text>
          <Text style={[textStyles.h6, textStyles.weightBold, { color: colors.primary }]}>{typeValue}</Text>
        </AppCard>
      </View>

      <View style={styles.footer}>
        <AppButton title={confirmLabel} onPress={onConfirm} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 12,
    paddingTop: 8,
  },
  iconWrap: {
    width: 112,
    height: 112,
    borderRadius: 56,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timestamp: {
    marginBottom: 8,
  },
  infoCard: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});
