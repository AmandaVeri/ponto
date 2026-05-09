import React, { type PropsWithChildren } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

export function Grid({ children, style, ...props }: PropsWithChildren<ViewProps>) {
  return (
    <View {...props} style={[styles.grid, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
});
