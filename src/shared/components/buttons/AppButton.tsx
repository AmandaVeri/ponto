import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';

type AppButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function AppButton({ title, variant = 'primary', loading, disabled, leftIcon, rightIcon, style, ...props }: AppButtonProps) {
  const { colors } = useAppTheme();
  const isDisabled = disabled || loading;
  const backgroundColor =
    variant === 'primary' ? colors.primary : variant === 'secondary' ? colors.secondary : variant === 'danger' ? colors.danger : 'transparent';
  const color = variant === 'ghost' || variant === 'outline' ? colors.primary : colors.primaryForeground;

  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      style={(state) => [
        styles.button,
        {
          backgroundColor,
          borderColor: variant === 'outline' ? colors.primary : backgroundColor,
          opacity: isDisabled ? 0.6 : 1,
        },
        typeof style === 'function' ? style(state) : style,
      ]}>
      {loading ? <ActivityIndicator color={color} /> : leftIcon}
      <Text style={[styles.title, { color }]} numberOfLines={1}>
        {title}
      </Text>
      {!loading ? rightIcon : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 44,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  title: { fontSize: 16, fontWeight: '700' },
});
