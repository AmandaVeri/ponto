import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { IconHelper } from '@/shared/components/icons/IconHelper';

export function DrawerMenuButton() {
  const navigation = useNavigation();
  const { colors } = useAppTheme();

  return (
    <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} hitSlop={10} style={styles.button}>
      <IconHelper provider="Feather" name="menu" size={22} color={colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 12,
  },
});
