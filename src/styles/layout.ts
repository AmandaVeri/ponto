import { StyleSheet } from 'react-native';

import { employeeTheme } from './theme';

export const layoutStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileContent: {
    alignSelf: 'center',
    flexGrow: 1,
    maxWidth: 430,
    width: '100%',
  },
  horizontalPadding: {
    paddingHorizontal: employeeTheme.spacing.xl,
  },
});
