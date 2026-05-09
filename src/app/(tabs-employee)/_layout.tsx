import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { MobileDrawerContent } from '@/shared/components/navigation/MobileDrawerContent';

export default function EmployeeDrawerLayout() {
  const { t } = useTranslation();
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  if (isDesktop) {
    return (
      <View style={[styles.desktopOnlyRoot, { backgroundColor: colors.tertiary }]}>
        <Text style={[styles.desktopOnlyTitle, { color: colors.primary }]}>{t('common:employeeDesktop.title')}</Text>
        <Text style={[styles.desktopOnlyDescription, { color: colors.textMuted }]}>{t('common:employeeDesktop.description')}</Text>
      </View>
    );
  }

  return (
    <Drawer drawerContent={(props) => <MobileDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: { display: 'none' },
          title: t('common:tabs.employee.check'),
        }}
      />
      <Drawer.Screen
        name="logout"
        options={{
          drawerLabel: t('common:menu.logout'),
          title: t('common:menu.logout'),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  desktopOnlyRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 8,
  },
  desktopOnlyTitle: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  desktopOnlyDescription: {
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 560,
  },
});
