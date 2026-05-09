import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { IconHelper } from '@/shared/components/icons/IconHelper';

type AppCheckboxProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
};

export function AppCheckbox({ value, onValueChange, label, disabled }: AppCheckboxProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable disabled={disabled} onPress={() => onValueChange(!value)} style={styles.container}>
      <Text
        style={[
          styles.box,
          { borderColor: value ? colors.primary : colors.border, backgroundColor: value ? colors.primary : colors.surface },
        ]}>
        {value ? <IconHelper provider="Feather" name="check" size={14} color={colors.primaryForeground} /> : null}
      </Text>
      {label ? <Text style={{ color: disabled ? colors.disabled : colors.text }}>{label}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  box: { width: 22, height: 22, borderWidth: 1, borderRadius: 4, textAlign: 'center' },
});
