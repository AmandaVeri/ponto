import React from 'react';
import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';
import { useController, type Control, type FieldPath, type FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useAppTheme } from '@/hooks/useAppTheme';
import { FormField } from '@/shared/components/forms/FormField';

export type AppInputProps<T extends FieldValues> = Omit<TextInputProps, 'value' | 'onChangeText'> & {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  labelTx?: string;
  helperText?: string;
  helperTx?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  mask?: (value: string) => string;
};

export function AppInput<T extends FieldValues>({
  control,
  name,
  label,
  labelTx,
  helperText,
  helperTx,
  leftIcon,
  rightIcon,
  loading,
  mask,
  editable = true,
  placeholder,
  ...textInputProps
}: AppInputProps<T>) {
  const { t } = useTranslation();
  const { colors } = useAppTheme();
  const { field, fieldState } = useController({ control, name });
  const disabled = editable === false;

  return (
    <FormField
      label={labelTx ? t(labelTx) : label}
      helperText={helperTx ? t(helperTx) : helperText}
      error={fieldState.error?.message}
      disabled={disabled}
      loading={loading}>
      <View
        style={[
          styles.inputWrapper,
          { backgroundColor: colors.surface, borderColor: fieldState.error ? colors.danger : colors.border },
        ]}>
        {leftIcon}
        <TextInput
          {...textInputProps}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          value={field.value ? String(field.value) : ''}
          onBlur={field.onBlur}
          onChangeText={(value) => field.onChange(mask ? mask(value) : value)}
          style={[styles.input, { color: colors.text }]}
        />
        {rightIcon}
      </View>
    </FormField>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    minWidth: 0,
    fontSize: 16,
  },
});
