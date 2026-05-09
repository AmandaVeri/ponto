import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

export function AppChip({ label }: { label: string }) {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.chip, { backgroundColor: colors.surfaceMuted }]}>
      <Text style={{ color: colors.text }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: { alignSelf: 'flex-start', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
});
