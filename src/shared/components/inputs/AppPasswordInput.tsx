import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { type FieldValues } from 'react-hook-form';

import { IconHelper } from '@/shared/components/icons/IconHelper';
import { useAppTheme } from '@/hooks/useAppTheme';
import { AppInput, type AppInputProps } from './AppInput';

export function AppPasswordInput<T extends FieldValues>(props: AppInputProps<T>) {
  const [isVisible, setIsVisible] = useState(false);
  const { colors } = useAppTheme();

  return (
    <AppInput
      {...props}
      secureTextEntry={!isVisible}
      rightIcon={
        <Pressable onPress={() => setIsVisible((value) => !value)} hitSlop={10}>
          <IconHelper provider="Feather" name={isVisible ? 'eye-off' : 'eye'} color={colors.textMuted} />
        </Pressable>
      }
    />
  );
}
