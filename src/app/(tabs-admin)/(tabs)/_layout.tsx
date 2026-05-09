import { router, Slot, Tabs, type Href, usePathname } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { adminTabs } from '@/navigation/adminTabs';
import { LanguageSelector } from '@/shared/components/i18n/LanguageSelector';
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
  const modeKey = isDesktop ? 'desktop' : 'mobile';

  if (isDesktop) {
    return (
      <View key={modeKey} style={styles.desktopRoot}>
        <LinearGradient colors={[colors.primary, '#123746', colors.primary]} style={[styles.sidebar, { borderRightColor: 'transparent' }]}>
          <View style={[styles.sidebarBrand, { borderBottomColor: 'transparent' }]}>
            <Text style={[styles.brandText, { color: colors.tertiary }]}>PontoCerto</Text>
          </View>

          <View style={styles.sidebarMenu}>
            {adminTabs.map((tab) => {
              const href = (`/(tabs-admin)/(tabs)/${tab.name}`) as Href;
              const isActive = pathname === `/${tab.name}`;

              const item = (
                <Pressable
                  key={tab.name}
                  onPress={() => router.push(href)}
                  style={styles.sidebarItem}>
                  <AppIcon name={tab.icon} size={20} color={colors.tertiary} />
                  <Text style={{ color: colors.tertiary }}>{t(tab.labelKey)}</Text>
                </Pressable>
              );

              if (!isActive) return item;

              return (
                <LinearGradient key={tab.name} colors={[colors.secondary, '#61B96D']} style={styles.sidebarItemActive}>
                  {item}
                </LinearGradient>
              );
            })}

            {pathname === '/settings' ? (
              <LinearGradient colors={[colors.secondary, '#61B96D']} style={styles.sidebarItemActive}>
                <Pressable onPress={() => router.push('/(tabs-admin)/(tabs)/settings' as Href)} style={styles.sidebarItem}>
                  <AppIcon name="settings" size={20} color={colors.tertiary} />
                  <Text style={{ color: colors.tertiary }}>{t('common:menu.settings')}</Text>
                </Pressable>
              </LinearGradient>
            ) : (
              <Pressable onPress={() => router.push('/(tabs-admin)/(tabs)/settings' as Href)} style={styles.sidebarItem}>
                <AppIcon name="settings" size={20} color={colors.tertiary} />
                <Text style={{ color: colors.tertiary }}>{t('common:menu.settings')}</Text>
              </Pressable>
            )}
          </View>
        </LinearGradient>

        <View style={styles.main}>
          <View style={[styles.topMenu, { borderBottomColor: 'transparent', backgroundColor: colors.tertiary }]}>
            <Text style={{ color: colors.primary }}>20/05/2024</Text>
            <View style={styles.topMenuRight}>
              <LanguageSelector variant="header" />
              <AppIcon name="profile" size={18} color={colors.primary} />
              <Text style={{ color: colors.primary }}>Admin</Text>
              <Pressable onPress={() => router.replace('/auth' as Href)} style={styles.logoutButton}>
                <Text style={{ color: colors.primary, fontWeight: '600' }}>{t('common:menu.logout')}</Text>
              </Pressable>
            </View>
          </View>

          <View style={[styles.content, { backgroundColor: colors.tertiary }]}>
            <Slot />
          </View>
        </View>
      </View>
    );
  }

  return (
    <Tabs
      key={modeKey}
      backBehavior="history"
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
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
        tabBarStyle: {
          ...getBottomTabBarStyle(colors),
          elevation: 0,
          shadowOpacity: 0,
          shadowColor: 'transparent',
        },
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
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sidebarItemActive: {
    borderRadius: 8,
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
