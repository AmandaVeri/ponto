import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { MobileDrawerContent } from '@/shared/components/navigation/MobileDrawerContent';

export default function AdminDrawerLayout() {
  const { t } = useTranslation();

  return (
    <Drawer drawerContent={(props) => <MobileDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: { display: 'none' },
          title: t('common:tabs.admin.dashboard'),
        }}
      />
      <Drawer.Screen
        name="(tabs)/settings/index"
        options={{
          drawerLabel: t('common:menu.settings'),
          title: t('common:menu.settings'),
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
