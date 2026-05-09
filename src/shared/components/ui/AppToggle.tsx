import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

type AppToggleProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
};

export function AppToggle({ value, onValueChange, disabled }: AppToggleProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      disabled={disabled}
      onPress={() => onValueChange(!value)}
      style={[styles.track, { backgroundColor: value ? colors.primary : colors.surfaceMuted, opacity: disabled ? 0.6 : 1 }]}>
      <View style={[styles.thumb, { backgroundColor: colors.surface, transform: [{ translateX: value ? 22 : 0 }] }]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: { width: 50, height: 28, borderRadius: 14, padding: 3 },
  thumb: { width: 22, height: 22, borderRadius: 11 },
});
