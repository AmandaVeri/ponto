import React from 'react';
import { type FieldValues } from 'react-hook-form';

import { AppInput, type AppInputProps } from './AppInput';

export function AppTextarea<T extends FieldValues>(props: AppInputProps<T>) {
  return <AppInput {...props} multiline numberOfLines={5} textAlignVertical="top" style={[{ minHeight: 120 }, props.style]} />;
}
