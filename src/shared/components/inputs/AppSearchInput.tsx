import React from 'react';
import { type FieldValues } from 'react-hook-form';

import { useAppTheme } from '@/hooks/useAppTheme';
import { IconHelper } from '@/shared/components/icons/IconHelper';
import { AppInput, type AppInputProps } from './AppInput';

export function AppSearchInput<T extends FieldValues>(props: AppInputProps<T>) {
  const { colors } = useAppTheme();

  return (
    <AppInput
      {...props}
      autoCapitalize="none"
      leftIcon={<IconHelper provider="Feather" name="search" color={colors.textMuted} />}
    />
  );
}
