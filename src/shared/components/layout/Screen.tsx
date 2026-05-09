import React, { type PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/hooks/useAppTheme';
import { AppContainer } from './AppContainer';

type ScreenProps = PropsWithChildren<{
  scroll?: boolean;
  contentStyle?: ViewStyle;
}>;

export function Screen({ children, scroll = true, contentStyle }: ScreenProps) {
  const { colors } = useAppTheme();
  const Content = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.disabledlight }]}>
      <AppContainer>
        <Content
          contentContainerStyle={scroll ? [styles.content, contentStyle] : undefined}
          style={!scroll ? [styles.content, contentStyle] : undefined}>
          {children}
        </Content>
      </AppContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { flexGrow: 1, padding: 16, gap: 16 },
});
