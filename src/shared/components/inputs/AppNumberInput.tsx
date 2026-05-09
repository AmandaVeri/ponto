import React from 'react';
import { type FieldValues } from 'react-hook-form';

import { AppInput, type AppInputProps } from './AppInput';

export function AppNumberInput<T extends FieldValues>(props: AppInputProps<T>) {
  return <AppInput {...props} keyboardType="numeric" mask={(value) => value.replace(/[^\d.,-]/g, '')} />;
}
