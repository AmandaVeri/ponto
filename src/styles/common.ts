import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  centeredContent: {
    justifyContent: 'center',
  },
  card: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  rowBetweenCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenterWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  textCenter: {
    textAlign: 'center',
  },
  caption: {
    fontSize: 12,
    opacity: 0.75,
  },
  linkText: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
