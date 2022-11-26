import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light_85,
    padding: 10,
    height: 60,
    justifyContent: 'center',
    borderBottomEndRadius: 10,
    elevation: 10
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: theme.fontFamily.Robotoblack
  }
});