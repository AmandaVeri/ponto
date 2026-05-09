import { router, Slot, Tabs, type Href, usePathname } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { adminTabs } from '@/navigation/adminTabs';
import { AppIcon } from '@/shared/components/icons/AppIcon';
import { DrawerMenuButton } from '@/shared/components/navigation/DrawerMenuButton';
import { getBottomTabBarStyle } from '@/styles/bottomTabs';
import { getMobileHeaderStyle } from '@/styles/mobileHeader';

export default function AdminTabsLayout() {
  const { t } = useTranslation();
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const pathname = usePathname();
  const isDesktop = width >= 1024;

  if (isDesktop) {
    return (
      <View style={styles.desktopRoot}>
        <View style={[styles.sidebar, { borderRightColor: colors.border }]}>
          <View style={[styles.sidebarBrand, { borderBottomColor: colors.border }]}>
            <Text style={[styles.brandText, { color: colors.text }]}>PontoCerto</Text>
          </View>

          <View style={styles.sidebarMenu}>
            {adminTabs.map((tab) => {
              const href = (`/(tabs-admin)/(tabs)/${tab.name}`) as Href;
              const isActive = pathname === `/${tab.name}`;

              return (
                <Pressable
                  key={tab.name}
                  onPress={() => router.push(href)}
                  style={[
                    styles.sidebarItem,
                    {
                      borderColor: isActive ? colors.primary : 'transparent',
                      backgroundColor: isActive ? colors.surfaceMuted : 'transparent',
                    },
                  ]}>
                  <AppIcon name={tab.icon} size={20} color={isActive ? colors.primary : colors.textMuted} />
                  <Text style={{ color: isActive ? colors.primary : colors.text }}>{t(tab.labelKey)}</Text>
                </Pressable>
              );
            })}

            <Pressable
              onPress={() => router.push('/(tabs-admin)/(tabs)/settings' as Href)}
              style={[
                styles.sidebarItem,
                {
                  borderColor: pathname === '/settings' ? colors.primary : 'transparent',
                  backgroundColor: pathname === '/settings' ? colors.surfaceMuted : 'transparent',
                },
              ]}>
              <AppIcon name="settings" size={20} color={pathname === '/settings' ? colors.primary : colors.textMuted} />
              <Text style={{ color: pathname === '/settings' ? colors.primary : colors.text }}>{t('common:menu.settings')}</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.main}>
          <View style={[styles.topMenu, { borderBottomColor: colors.border }]}>
            <Text style={{ color: colors.textMuted }}>20/05/2024</Text>
            <View style={styles.topMenuRight}>
              <AppIcon name="profile" size={18} color={colors.textMuted} />
              <Text style={{ color: colors.text }}>Admin</Text>
              <Pressable onPress={() => router.replace('/auth' as Href)} style={styles.logoutButton}>
                <Text style={{ color: colors.primary, fontWeight: '600' }}>{t('common:menu.logout')}</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.content}>
            <Slot />
          </View>
        </View>
      </View>
    );
  }

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: true,
        headerLeft: () => <DrawerMenuButton />,
        headerStyle: getMobileHeaderStyle(colors),
        headerTintColor: colors.primary,
        headerTitleAlign: 'center',
        headerTitleStyle: { color: colors.primary, fontWeight: '700' },
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.disabled,
        tabBarLabelStyle: {
          fontWeight: '700',
        },
        tabBarStyle: getBottomTabBarStyle(colors),
      }}>
      {adminTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={`${tab.name}/index`}
          options={{
            title: t(tab.labelKey),
            tabBarLabel: t(tab.labelKey),
            tabBarIcon: ({ color, size }) => <AppIcon name={tab.icon} size={size} color={color} style={{ fontWeight: '700' }} />,
            ...tab.options,
          }}
        />
      ))}
      <Tabs.Screen
        name="settings/index"
        options={{
          title: t('common:menu.settings'),
          tabBarLabel: t('common:menu.settings'),
          tabBarIcon: ({ color, size }) => <AppIcon name="settings" size={size} color={color} style={{ fontWeight: '700' }} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  desktopRoot: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 260,
    borderRightWidth: 1,
  },
  sidebarBrand: {
    minHeight: 72,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  brandText: {
    fontSize: 24,
    fontWeight: '700',
  },
  sidebarMenu: {
    padding: 12,
    gap: 6,
  },
  sidebarItem: {
    minHeight: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  main: {
    flex: 1,
  },
  topMenu: {
    minHeight: 72,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topMenuRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoutButton: {
    marginLeft: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
