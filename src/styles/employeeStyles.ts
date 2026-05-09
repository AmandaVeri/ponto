import { Platform, StyleSheet } from 'react-native';

import { employeeTheme } from './theme';

const shadow = Platform.select({
  web: {
    boxShadow: '0 10px 24px rgba(16, 24, 40, 0.10)',
  },
  default: {
    elevation: 5,
    shadowColor: employeeTheme.colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },
});

const softShadow = Platform.select({
  web: {
    boxShadow: '0 6px 16px rgba(16, 24, 40, 0.08)',
  },
  default: {
    elevation: 3,
    shadowColor: employeeTheme.colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
});

export const employeeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: employeeTheme.colors.background,
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: employeeTheme.spacing['2xl'],
    paddingHorizontal: employeeTheme.spacing.xl,
    paddingTop: employeeTheme.spacing.lg,
  },
  headerButton: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  greetingWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  greeting: {
    color: employeeTheme.colors.text,
    fontSize: employeeTheme.typography.xl,
    fontWeight: '800',
    lineHeight: 32,
  },
  greetingName: {
    color: employeeTheme.colors.primary,
  },
  date: {
    color: employeeTheme.colors.textMuted,
    fontSize: employeeTheme.typography.md,
    lineHeight: 24,
    marginTop: 2,
  },
  notificationDot: {
    backgroundColor: employeeTheme.colors.primary,
    borderRadius: 7,
    height: 14,
    position: 'absolute',
    right: 10,
    top: 7,
    width: 14,
  },
  currentTimeCard: {
    alignItems: 'center',
    backgroundColor: employeeTheme.colors.primary,
    borderTopLeftRadius: employeeTheme.radius.xl,
    borderTopRightRadius: employeeTheme.radius.xl,
    marginHorizontal: employeeTheme.spacing.xl,
    minHeight: 150,
    paddingBottom: 44,
    paddingTop: employeeTheme.spacing['3xl'],
  },
  currentTimeLabel: {
    color: employeeTheme.colors.surface,
    fontSize: employeeTheme.typography.lg,
    fontWeight: '600',
    lineHeight: 28,
  },
  currentTimeValue: {
    color: employeeTheme.colors.surface,
    fontSize: employeeTheme.typography.clock,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 70,
    marginTop: employeeTheme.spacing.md,
  },
  summaryCard: {
    borderColor: employeeTheme.colors.border,
    borderRadius: employeeTheme.radius.xl,
    marginHorizontal: employeeTheme.spacing.xl,
    marginTop: -26,
    paddingHorizontal: employeeTheme.spacing['2xl'],
    paddingVertical: employeeTheme.spacing['3xl'],
    ...shadow,
  },
  summarySection: {
    alignItems: 'center',
    gap: employeeTheme.spacing.md,
  },
  summaryDivider: {
    backgroundColor: employeeTheme.colors.border,
    height: 1,
    marginVertical: employeeTheme.spacing['2xl'],
    width: '100%',
  },
  summaryLabel: {
    color: employeeTheme.colors.text,
    fontSize: employeeTheme.typography.lg,
    fontWeight: '700',
    textAlign: 'center',
  },
  summaryValue: {
    color: employeeTheme.colors.text,
    fontSize: employeeTheme.typography['2xl'],
    fontWeight: '800',
    lineHeight: 40,
    textAlign: 'center',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: employeeTheme.spacing.lg,
    paddingHorizontal: employeeTheme.spacing.xl,
    paddingTop: employeeTheme.spacing['2xl'],
  },
  timeClockButton: {
    alignItems: 'center',
    borderRadius: employeeTheme.radius.lg,
    flexBasis: '47%',
    flexGrow: 1,
    gap: employeeTheme.spacing.lg,
    justifyContent: 'center',
    minHeight: 120,
    paddingHorizontal: employeeTheme.spacing.md,
    paddingVertical: employeeTheme.spacing.xl,
    ...softShadow,
  },
  entryButton: {
    backgroundColor: employeeTheme.colors.primary,
  },
  lunchOutButton: {
    backgroundColor: employeeTheme.colors.orange,
  },
  lunchReturnButton: {
    backgroundColor: employeeTheme.colors.blue,
  },
  exitButton: {
    backgroundColor: employeeTheme.colors.red,
  },
  timeClockButtonText: {
    color: employeeTheme.colors.surface,
    fontSize: employeeTheme.typography.lg,
    fontWeight: '800',
    lineHeight: 26,
    textAlign: 'center',
  },
  bottomTabs: {
    backgroundColor: employeeTheme.colors.surface,
    borderTopColor: employeeTheme.colors.border,
    borderTopWidth: 1,
    marginTop: employeeTheme.spacing['2xl'],
    paddingBottom: employeeTheme.spacing.sm,
    paddingHorizontal: employeeTheme.spacing.xl,
    paddingTop: employeeTheme.spacing.md,
  },
  bottomTabRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomTabItem: {
    alignItems: 'center',
    gap: employeeTheme.spacing.xs,
    minWidth: 76,
    paddingVertical: employeeTheme.spacing.sm,
  },
  bottomTabLabel: {
    fontSize: employeeTheme.typography.md,
    fontWeight: '700',
  },
  bottomTabLabelActive: {
    color: employeeTheme.colors.primary,
  },
  bottomTabLabelInactive: {
    color: employeeTheme.colors.tabInactive,
  },
  homeIndicator: {
    alignSelf: 'center',
    backgroundColor: employeeTheme.colors.handle,
    borderRadius: 2,
    height: 4,
    marginTop: employeeTheme.spacing.md,
    width: 140,
  },
});
