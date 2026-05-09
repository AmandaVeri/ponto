import { router, type Href } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { AppButton } from '@/shared/components/buttons';
import { AppInput, AppPasswordInput } from '@/shared/components/inputs';
import { Screen } from '@/shared/components/layout';

type LoginFormValues = {
  username: string;
  password: string;
};

export default function LoginScreen() {
  const { colors } = useAppTheme();
  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = ({ username }: LoginFormValues) => {
    const role = username.trim().toLowerCase();

    if (role === 'admin') {
      router.replace('/(tabs-admin)/dashboard' as Href);
      return;
    }

    if (role === 'employee') {
      router.replace('/(tabs-employee)/check' as Href);
      return;
    }

    Alert.alert('Usuario inválido', 'Escribe "admin" o "employee" en el primer campo para navegar.');
  };

  return (
    <Screen scroll={false}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: colors.text }]}>Login</Text>
        <Text style={[styles.subtitle, { color: colors.textMuted }]}>Usa "admin" o "employee" para probar navegación por perfil.</Text>

        <AppInput control={control} name="username" label="Usuario" autoCapitalize="none" autoCorrect={false} placeholder="admin o employee" />

        <AppPasswordInput control={control} name="password" label="Contraseña" autoCapitalize="none" autoCorrect={false} placeholder="••••••••" />

        <AppButton title="Ingresar" onPress={handleSubmit(onSubmit)} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 8,
  },
});
