import React, { type PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '@/hooks/useAppTheme';
import { AppContainer } from './AppContainer';

type ScreenContainerProps = PropsWithChildren<{
  scroll?: boolean;
  contentStyle?: ViewStyle;
  footer?: React.ReactNode;
}>;

export function ScreenContainer({ children, scroll = true, contentStyle, footer }: ScreenContainerProps) {
  const { colors } = useAppTheme();
  const Content = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.tertiary }]}>
      <View style={styles.root}>
        <AppContainer>
          <Content
            contentContainerStyle={scroll ? [styles.content, contentStyle] : undefined}
            style={!scroll ? [styles.content, contentStyle] : undefined}>
            {children}
          </Content>
        </AppContainer>
        {footer}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  root: { flex: 1 },
  content: { flexGrow: 1, padding: 16, gap: 16 },
});
