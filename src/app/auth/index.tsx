import { router, type Href } from 'expo-router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert, Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AUTH_ROLE, type AuthRole } from '@/constants/auth';
import { useAppTheme } from '@/hooks/useAppTheme';
import { AppButton } from '@/shared/components/buttons';
import { AppInput, AppPasswordInput } from '@/shared/components/inputs';
import { Screen } from '@/shared/components/layout';
import { AppModal } from '@/shared/components/modal';
import { AppCheckbox } from '@/shared/components/ui';
import { commonStyles } from '@/styles/common';
import { textStyles } from '@/styles/text';

type LoginFormValues = {
  emailOrCpf: string;
  password: string;
};

type PasswordResetFormValues = {
  emailOrCpf: string;
};

export default function LoginScreen() {
  const { t } = useTranslation('auth');
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const desktopMaxWidth = Math.floor((width * 6) / 12);
  const [role, setRole] = useState<AuthRole>(AUTH_ROLE.EMPLOYEE);
  const [rememberMe, setRememberMe] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      emailOrCpf: '',
      password: '',
    },
  });
  const { control: resetControl, handleSubmit: handleResetSubmit, reset: resetPasswordRequest } = useForm<PasswordResetFormValues>({
    defaultValues: {
      emailOrCpf: '',
    },
  });

  const onSubmit = ({ emailOrCpf, password }: LoginFormValues) => {
    if (!emailOrCpf.trim() || !password.trim()) {
      Alert.alert(t('login.requiredFieldsTitle'), t('login.requiredFieldsMessage'));
      return;
    }

    if (role === AUTH_ROLE.ADMIN) {
      router.replace('/(tabs-admin)/(tabs)/dashboard' as Href);
      return;
    }

    router.replace('/(tabs-employee)/(tabs)/check' as Href);
  };

  const onSubmitResetRequest = ({ emailOrCpf }: PasswordResetFormValues) => {
    if (!emailOrCpf.trim()) {
      Alert.alert(t('login.requiredFieldTitle'), t('login.requiredFieldMessage'));
      return;
    }

    Alert.alert(t('login.resetSentTitle'), t('login.resetSentMessage'));
    resetPasswordRequest();
    setIsResetModalOpen(false);
  };

  return (
    <Screen scroll={false}>
      <View style={[commonStyles.flex1, commonStyles.centeredContent]}>
        <View style={[styles.contentWrapper, isDesktop ? { maxWidth: desktopMaxWidth } : null]}>
          <View style={[commonStyles.card, styles.card, { backgroundColor: colors.tertiary }]}>
            <Image source={require('../../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />

            <Text style={[textStyles.h4, textStyles.weightExtraBold, textStyles.center, { color: colors.primary }]}>
              {t('login.welcomeTitle')}
            </Text>
            <Text style={[textStyles.h6, textStyles.center, styles.welcomeSubtitle, { color: colors.primary }]}>
              {t('login.welcomeSubtitle')}
            </Text>

            <View style={[styles.roleSwitch, { backgroundColor: colors.disabledlight }]}>
              <Pressable
                onPress={() => setRole(AUTH_ROLE.EMPLOYEE)}
                style={[
                  styles.roleButton,
                  { backgroundColor: role === AUTH_ROLE.EMPLOYEE ? colors.secondary : colors.transparent },
                ]}>
                <Text style={[textStyles.weightBold, { color: role === AUTH_ROLE.EMPLOYEE ? colors.tertiary : colors.primary }]}>{t('login.roleEmployee')}</Text>
              </Pressable>
              <Pressable
                onPress={() => setRole(AUTH_ROLE.ADMIN)}
                style={[
                  styles.roleButton,
                  { backgroundColor: role === AUTH_ROLE.ADMIN ? colors.secondary : colors.transparent },
                ]}>
                <Text style={[textStyles.weightBold, { color: role === AUTH_ROLE.ADMIN ? colors.tertiary : colors.primary }]}>{t('login.roleAdmin')}</Text>
              </Pressable>
            </View>

            <AppInput control={control} name="emailOrCpf" autoCapitalize="none" autoCorrect={false} placeholder={t('login.emailOrCpfPlaceholder')} />

            <AppPasswordInput control={control} name="password" autoCapitalize="none" autoCorrect={false} placeholder={t('login.passwordPlaceholder')} />

            <View style={commonStyles.rowBetweenCenter}>
              <AppCheckbox value={rememberMe} onValueChange={setRememberMe} label={t('login.rememberMe')} />
              <Pressable onPress={() => setIsResetModalOpen(true)}>
                <Text style={[styles.forgotPassword, { color: colors.secondary }]}>{t('login.forgotPassword')}</Text>
              </Pressable>
            </View>

            <AppButton title={t('signIn')} onPress={handleSubmit(onSubmit)} />

            <View style={commonStyles.rowCenterWrap}>
              <Text style={[commonStyles.caption, { color: colors.primary }]}>{t('login.noAccountPrefix')}</Text>
              <Pressable onPress={() => Alert.alert(t('login.contactTitle'), t('login.contactMessage'))}>
                <Text style={[commonStyles.caption, commonStyles.linkText, textStyles.weightBold, { color: colors.primary }]}>{t('login.contactLink')}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <AppModal visible={isResetModalOpen} title={t('login.resetTitle')} size="md" onClose={() => setIsResetModalOpen(false)}>
        <Text style={{ color: colors.primary }}>{t('login.resetDescription')}</Text>
        <AppInput control={resetControl} name="emailOrCpf" autoCapitalize="none" autoCorrect={false} placeholder={t('login.emailOrCpfPlaceholder')} />
        <AppButton title={t('login.requestButton')} onPress={handleResetSubmit(onSubmitResetRequest)} />
      </AppModal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  card: {
    marginHorizontal: 4,
    gap: 14,
  },
  logo: {
    width: 170,
    height: 170,
    alignSelf: 'center',
  },
  welcomeSubtitle: {
    opacity: 0.85,
    marginBottom: 8,
  },
  roleSwitch: {
    flexDirection: 'row',
    borderRadius: 14,
    padding: 4,
    gap: 4,
  },
  roleButton: {
    flex: 1,
    minHeight: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    fontSize: 13,
    ...textStyles.weightBold,
  },
});
