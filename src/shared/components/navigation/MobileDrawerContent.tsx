import { LinearGradient } from 'expo-linear-gradient';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { LanguageSelector } from '@/shared/components/i18n/LanguageSelector';
import { AppIcon, type AppIconName } from '@/shared/components/icons/AppIcon';

function resolveIconByRoute(routeName: string): AppIconName {
  if (routeName.includes('settings')) return 'settings';
  if (routeName.includes('logout')) return 'logout';
  return 'profile';
}

function resolveLabel(descriptor: DrawerContentComponentProps['descriptors'][string], fallback: string) {
  const label = descriptor.options.drawerLabel;
  if (typeof label === 'string') return label;
  if (typeof descriptor.options.title === 'string') return descriptor.options.title;
  return fallback;
}

export function MobileDrawerContent({ state, navigation, descriptors }: DrawerContentComponentProps) {
  const { colors } = useAppTheme();
  const visibleRoutes = state.routes.filter((route) => route.name !== '(tabs)');
  const logoutRoute = visibleRoutes.find((route) => route.name.includes('logout'));
  const regularRoutes = visibleRoutes.filter((route) => !route.name.includes('logout'));

  return (
    <LinearGradient colors={[colors.primary, '#123746', colors.primary]} style={styles.root}>
      <View style={styles.content}>
        <View style={styles.topSection}>
          {regularRoutes.map((route) => {
            const routeIndex = state.routes.findIndex((item) => item.key === route.key);
            const focused = state.index === routeIndex;
            const descriptor = descriptors[route.key];
            const label = resolveLabel(descriptor, route.name);
            const icon = resolveIconByRoute(route.name);

            const item = (
              <Pressable
                key={route.key}
                onPress={() => navigation.navigate(route.name as never)}
                style={styles.itemButton}>
                <AppIcon name={icon} size={18} color={colors.tertiary} />
                <Text style={[styles.itemText, { color: colors.tertiary }]}>{label}</Text>
              </Pressable>
            );

            if (!focused) return item;

            return (
              <LinearGradient key={route.key} colors={[colors.secondary, '#61B96D']} style={styles.itemActive}>
                {item}
              </LinearGradient>
            );
          })}
        </View>

        <View style={styles.bottomSection}>
          <LanguageSelector variant="drawer" />

          {logoutRoute ? (() => {
            const route = logoutRoute;
            const routeIndex = state.routes.findIndex((item) => item.key === route.key);
            const focused = state.index === routeIndex;
            const descriptor = descriptors[route.key];
            const label = resolveLabel(descriptor, route.name);

            const item = (
              <Pressable onPress={() => navigation.navigate(route.name as never)} style={styles.itemButton}>
                <AppIcon name="logout" size={18} color={colors.tertiary} />
                <Text style={[styles.itemText, { color: colors.tertiary }]}>{label}</Text>
              </Pressable>
            );

            if (!focused) return <View key={route.key}>{item}</View>;

            return (
              <LinearGradient key={route.key} colors={[colors.secondary, '#61B96D']} style={styles.itemActive}>
                {item}
              </LinearGradient>
            );
          })() : null}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 12,
    gap: 8,
  },
  topSection: {
    gap: 8,
  },
  bottomSection: {
    marginTop: 'auto',
    gap: 8,
    paddingBottom: 24,
  },
  itemActive: {
    borderRadius: 12,
  },
  itemButton: {
    minHeight: 46,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
