import React, { type PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { employeeStyles } from '@/styles/employeeStyles';
import { layoutStyles } from '@/styles/layout';

type ScreenContainerProps = PropsWithChildren<{
  footer?: React.ReactNode;
}>;

export function ScreenContainer({ children, footer }: ScreenContainerProps) {
  return (
    <SafeAreaView style={employeeStyles.screen}>
      <View style={layoutStyles.flex}>
        <ScrollView contentContainerStyle={[layoutStyles.mobileContent, employeeStyles.content]} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        {footer}
      </View>
    </SafeAreaView>
  );
}
