import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useController, type Control, type FieldPath, type FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useAppTheme } from '@/hooks/useAppTheme';
import { FormField } from '@/shared/components/forms/FormField';
import { IconHelper } from '@/shared/components/icons/IconHelper';

type SelectOption = { label: string; value: string };

type AppSelectProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  labelTx?: string;
  placeholderTx?: string;
  options: SelectOption[];
  disabled?: boolean;
};

export function AppSelect<T extends FieldValues>({
  control,
  name,
  label,
  labelTx,
  placeholderTx = 'common:select',
  options,
  disabled,
}: AppSelectProps<T>) {
  const { t } = useTranslation();
  const { colors } = useAppTheme();
  const { field, fieldState } = useController({ control, name });
  const selected = options.find((option) => option.value === field.value);

  return (
    <FormField label={labelTx ? t(labelTx) : label} error={fieldState.error?.message} disabled={disabled}>
      <Pressable
        disabled={disabled}
        onPress={() => {
          const currentIndex = Math.max(0, options.findIndex((option) => option.value === field.value));
          field.onChange(options[(currentIndex + 1) % options.length]?.value);
        }}
        style={[styles.select, { backgroundColor: colors.surface, borderColor: fieldState.error ? colors.danger : colors.border }]}>
        <Text style={{ color: selected ? colors.text : colors.textMuted }}>{selected?.label ?? t(placeholderTx)}</Text>
        <View>
          <IconHelper provider="Feather" name="chevron-down" color={colors.textMuted} size={18} />
        </View>
      </Pressable>
    </FormField>
  );
}

const styles = StyleSheet.create({
  select: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
