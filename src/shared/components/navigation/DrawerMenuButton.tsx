import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { IconHelper } from '@/shared/components/icons/IconHelper';

export function DrawerMenuButton() {
  const navigation = useNavigation();
  const { colors } = useAppTheme();

  return (
    <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} hitSlop={10}>
      <IconHelper provider="Feather" name="menu" size={22} color={colors.text} />
    </Pressable>
  );
}
