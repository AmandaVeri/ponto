import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useController, type Control, type FieldPath, type FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useAppTheme } from '@/hooks/useAppTheme';
import { FormField } from '@/shared/components/forms/FormField';

type PickerMode = 'date' | 'time' | 'datetime';

type AppDateTimePickerProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  mode?: PickerMode;
  labelTx?: string;
  label?: string;
  locale?: string;
  timeZone?: string;
  disabled?: boolean;
};

function formatDate(value: Date | string | undefined, mode: PickerMode, locale?: string, timeZone?: string) {
  if (!value) return '';
  const date = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat(locale, {
    dateStyle: mode === 'time' ? undefined : 'medium',
    timeStyle: mode === 'date' ? undefined : 'short',
    timeZone,
  }).format(date);
}

export function AppDateTimePicker<T extends FieldValues>({
  control,
  name,
  mode = 'datetime',
  label,
  labelTx,
  locale,
  timeZone,
  disabled,
}: AppDateTimePickerProps<T>) {
  const { t, i18n } = useTranslation();
  const { colors } = useAppTheme();
  const { field, fieldState } = useController({ control, name });
  const formattedValue = formatDate(field.value, mode, locale ?? i18n.language, timeZone);

  return (
    <FormField label={labelTx ? t(labelTx) : label} error={fieldState.error?.message} disabled={disabled}>
      <Pressable
        disabled={disabled}
        onPress={() => field.onChange(new Date().toISOString())}
        style={[styles.input, { backgroundColor: colors.surface, borderColor: fieldState.error ? colors.danger : colors.border }]}>
        <Text style={{ color: formattedValue ? colors.text : colors.textMuted }}>
          {formattedValue || t(mode === 'time' ? 'common:forms.time' : 'common:forms.date')}
        </Text>
      </Pressable>
    </FormField>
  );
}

const styles = StyleSheet.create({
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
});
