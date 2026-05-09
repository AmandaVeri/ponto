import React from 'react';
import { type FieldValues } from 'react-hook-form';

import { AppInput, type AppInputProps } from './AppInput';

function currencyMask(value: string) {
  const digits = value.replace(/\D/g, '');
  const cents = Number(digits || 0) / 100;
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'BRL' }).format(cents);
}

export function AppCurrencyInput<T extends FieldValues>(props: AppInputProps<T>) {
  return <AppInput {...props} keyboardType="numeric" mask={currencyMask} />;
}
