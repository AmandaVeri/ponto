import React, { type PropsWithChildren } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

export function AppCard({ children, style, ...props }: PropsWithChildren<ViewProps>) {
  const { colors, theme } = useAppTheme();

  return (
    <View {...props} style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }, theme.shadows.sm, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    gap: 12,
  },
});
