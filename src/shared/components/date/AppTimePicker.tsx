import React from 'react';
import { type FieldValues } from 'react-hook-form';

import { AppDateTimePicker } from './AppDateTimePicker';

export function AppTimePicker<T extends FieldValues>(props: React.ComponentProps<typeof AppDateTimePicker<T>>) {
  return <AppDateTimePicker {...props} mode="time" />;
}
