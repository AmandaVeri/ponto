import React, { type PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, useWindowDimensions, type DimensionValue } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';

type AppModalProps = PropsWithChildren<{
  visible: boolean;
  title?: string;
  onClose: () => void;
  size?: 'full' | 'lg' | 'md' | 'sm' | 'xs';
}>;

const DESKTOP_WIDTH_BY_SIZE: Record<NonNullable<AppModalProps['size']>, DimensionValue> = {
  full: '100%',
  lg: '70%',
  md: '40%',
  sm: '32%',
  xs: '24%',
};

const MOBILE_WIDTH_BY_SIZE: Record<NonNullable<AppModalProps['size']>, DimensionValue> = {
  full: '100%',
  lg: '96%',
  md: '92%',
  sm: '88%',
  xs: '84%',
};

export function AppModal({ visible, title, onClose, size = 'md', children }: AppModalProps) {
  const { colors, theme } = useAppTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const modalWidth: DimensionValue = isDesktop ? DESKTOP_WIDTH_BY_SIZE[size] : MOBILE_WIDTH_BY_SIZE[size];

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={[styles.content, { backgroundColor: colors.tertiary, width: modalWidth }, size === 'full' ? styles.fullContent : null, theme.shadows.md]}>
          {title ? <Text style={[styles.title, { color: colors.primary }]}>{title}</Text> : null}
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000099',
  },
  content: {
    alignSelf: 'center',
    borderRadius: 16,
    padding: 16,
    gap: 14,
  },
  fullContent: {
    flex: 1,
    borderRadius: 0,
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
  },
});
