import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Screen } from './Screen';
import { AppCard } from '@/shared/components/cards/AppCard';
import { useAppTheme } from '@/hooks/useAppTheme';

export function PlaceholderScreen({ title, description }: { title: string; description: string }) {
  const { colors } = useAppTheme();

  return (
    <Screen>
      <AppCard>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={{ color: colors.textMuted }}>{description}</Text>
      </AppCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '800' },
});
