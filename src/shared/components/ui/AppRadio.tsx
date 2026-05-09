import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

type AppRadioProps = {
  selected: boolean;
  onPress: () => void;
  label?: string;
  disabled?: boolean;
};

export function AppRadio({ selected, onPress, label, disabled }: AppRadioProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable disabled={disabled} onPress={onPress} style={styles.container}>
      <View style={[styles.outer, { borderColor: selected ? colors.primary : colors.border }]}>
        {selected ? <View style={[styles.inner, { backgroundColor: colors.primary }]} /> : null}
      </View>
      {label ? <Text style={{ color: disabled ? colors.disabled : colors.text }}>{label}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  outer: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  inner: { width: 10, height: 10, borderRadius: 5 },
});
