import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { useTranslation } from 'react-i18next';

import { useAppTheme } from '@/hooks/useAppTheme';
import { changeLanguage } from '@/services/i18n';
import type { SupportedLanguage } from '@/services/i18n';
import { IconHelper } from '@/shared/components/icons/IconHelper';

type LanguageOption = {
  code: SupportedLanguage;
  label: string;
  countryIso: string;
};

type LanguageSelectorProps = {
  variant?: 'drawer' | 'header';
};

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'es', label: 'Español CL', countryIso: 'CL' },
  { code: 'pt', label: 'Português BR', countryIso: 'BR' },
  { code: 'en', label: 'English US', countryIso: 'US' },
];

export function LanguageSelector({ variant = 'drawer' }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const { colors } = useAppTheme();
  const [open, setOpen] = useState(false);

  const current = (i18n.language?.split('-')[0] || 'pt') as SupportedLanguage;
  const isHeader = variant === 'header';
  const opensUp = variant === 'drawer';
  const currentOption = useMemo(
    () => LANGUAGE_OPTIONS.find((option) => option.code === current) ?? LANGUAGE_OPTIONS[1],
    [current],
  );

  const onSelect = async (language: SupportedLanguage) => {
    await changeLanguage(language);
    setOpen(false);
  };

  return (
    <View style={[styles.container, isHeader ? styles.headerContainer : styles.drawerContainer]}>
      <Pressable
        onPress={() => setOpen((value) => !value)}
        style={[
          styles.item,
          {
            borderColor: isHeader ? colors.disabled : colors.tertiary,
            backgroundColor: isHeader ? colors.tertiary : 'transparent',
          },
        ]}>
        <CountryFlag isoCode={currentOption.countryIso} size={14} style={styles.flag} />
        <Text style={[styles.label, { color: isHeader ? colors.primary : colors.tertiary }]}>{currentOption.label}</Text>
        <IconHelper provider="Feather" name={open ? 'chevron-up' : 'chevron-down'} size={14} color={isHeader ? colors.primary : colors.tertiary} />
      </Pressable>

      {open ? (
        <View
          style={[
            styles.options,
            opensUp ? styles.optionsUp : styles.optionsDown,
            {
              backgroundColor: colors.tertiary,
              borderColor: isHeader ? colors.disabled : colors.tertiary,
            },
          ]}>
          {LANGUAGE_OPTIONS.map((option) => (
            <Pressable key={option.code} onPress={() => onSelect(option.code)} style={styles.optionItem}>
              <CountryFlag isoCode={option.countryIso} size={14} style={styles.flag} />
              <Text style={[styles.label, { color: colors.primary }]}>{option.label}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  drawerContainer: {
    minWidth: 190,
  },
  headerContainer: {
    minWidth: 170,
  },
  item: {
    minHeight: 30,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'space-between',
  },
  options: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 4,
    zIndex: 10,
  },
  optionsDown: {
    top: 34,
  },
  optionsUp: {
    bottom: 34,
  },
  optionItem: {
    minHeight: 30,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  flag: {
    borderRadius: 2,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
  },
});
