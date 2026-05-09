import { Stack } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useAppTheme } from '@/hooks/useAppTheme';
import { IconHelper } from '@/shared/components/icons/IconHelper';
import { AppModal } from '@/shared/components/modal';
import { DrawerMenuButton } from '@/shared/components/navigation/DrawerMenuButton';
import { getMobileHeaderStyle } from '@/styles/mobileHeader';

export default function CheckStack() {
  const { t } = useTranslation('common');
  const { colors } = useAppTheme();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notifications = useMemo(
    () => [
      t('employeeCheck.notifications.items.0'),
      t('employeeCheck.notifications.items.1'),
      t('employeeCheck.notifications.items.2'),
    ],
    [t],
  );

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: getMobileHeaderStyle(colors),
          headerTintColor: colors.primary,
          headerTitleAlign: 'center',
          headerTitleStyle: { color: colors.primary, fontWeight: '700' },
        }}>
        <Stack.Screen
          name="index"
          options={{
            headerLeft: () => <DrawerMenuButton />,
            headerTitle: () => (
              <View style={styles.titleWrapper}>
                <Text style={[styles.greeting, { color: colors.primary }]}>
                  Olá, <Text style={{ color: colors.secondary }}>João</Text>
                </Text>
                <Text style={[styles.date, { color: colors.textMuted }]}>Segunda-feira, 20/05/2024</Text>
              </View>
            ),
            headerRight: () => (
              <Pressable style={styles.rightButton} accessibilityLabel={t('employeeCheck.notifications.open')} onPress={() => setIsNotificationsOpen(true)}>
                <IconHelper provider="Feather" name="bell" size={22} color={colors.primary} />
                <View style={[styles.notificationDot, { backgroundColor: colors.secondary }]} />
              </Pressable>
            ),
          }}
        />
      </Stack>
      <AppModal visible={isNotificationsOpen} title={t('employeeCheck.notifications.title')} size="sm" onClose={() => setIsNotificationsOpen(false)}>
        <View style={styles.notificationsList}>
          {notifications.map((item, index) => (
            <View key={`${item}-${index}`} style={[styles.notificationItem, { borderBottomColor: colors.border }]}>
              <Text style={{ color: colors.primary }}>{item}</Text>
            </View>
          ))}
        </View>
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 22,
  },
  date: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  rightButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  notificationDot: {
    position: 'absolute',
    right: 5,
    top: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  notificationsList: {
    gap: 2,
  },
  notificationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});
