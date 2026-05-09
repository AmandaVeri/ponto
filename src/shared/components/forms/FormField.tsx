import React, { type PropsWithChildren } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

type FormFieldProps = PropsWithChildren<{
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  loading?: boolean;
}>;

export function FormField({ label, error, helperText, disabled, loading, children }: FormFieldProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      {label ? <Text style={[styles.label, { color: disabled ? colors.disabled : colors.text }]}>{label}</Text> : null}
      <View style={{ opacity: disabled ? 0.6 : 1 }}>
        {children}
        {loading ? <ActivityIndicator color={colors.primary} style={styles.loader} /> : null}
      </View>
      {error ? <Text style={[styles.caption, { color: colors.danger }]}>{error}</Text> : null}
      {!error && helperText ? <Text style={[styles.caption, { color: colors.textMuted }]}>{helperText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 6 },
  label: { fontSize: 14, fontWeight: '600' },
  caption: { fontSize: 12 },
  loader: { position: 'absolute', right: 12, top: 12 },
});
