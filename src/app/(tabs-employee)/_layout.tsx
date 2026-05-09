import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function EmployeeDrawerLayout() {
  const { t } = useTranslation();

  return (
    <Drawer screenOptions={{ headerShown: false }}>
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
