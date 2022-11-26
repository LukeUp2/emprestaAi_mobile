import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../utils/theme';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: width / 2,
    right: width / 2,
    elevation: 20
  },
  button: {
    backgroundColor: theme.colors.lighter_95,
    width: 230,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonTitle: {
    fontSize: 19,
    fontFamily: theme.fontFamily.Robotobold
  }
});