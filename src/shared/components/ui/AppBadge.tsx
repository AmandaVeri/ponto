import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger';

export function AppBadge({ label, tone = 'neutral' }: { label: string; tone?: BadgeTone }) {
  const { colors } = useAppTheme();
  const backgroundColor = tone === 'success' ? colors.success : tone === 'warning' ? colors.warning : tone === 'danger' ? colors.danger : colors.surfaceMuted;
  const color = tone === 'neutral' ? colors.text : colors.primaryForeground;

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { alignSelf: 'flex-start', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4 },
  label: { fontSize: 12, fontWeight: '700' },
});
