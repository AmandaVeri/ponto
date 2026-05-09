import React, { type PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

export function AppContainer({ children }: PropsWithChildren) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.outer}>
      <View style={[styles.inner, { backgroundColor: colors.disabledlight }]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  inner: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
