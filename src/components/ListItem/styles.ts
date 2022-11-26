import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: { 
    width: 170, 
    height: 140, 
    backgroundColor: theme.colors.dark_27, 
    marginHorizontal: 10, 
    padding: 6, 
    paddingTop: 10,
    borderRadius: 10, 
    elevation: 10, 
    marginTop: 16 
  },
  content: {
    
  },
  title: {
    color: theme.colors.light_85 ,
    fontFamily: theme.fontFamily.Robotobold,
    letterSpacing: 1,
    alignSelf: 'center',
    marginBottom: 6
  },
  label: {
    color: '#fff',
    fontFamily: theme.fontFamily.Robotomd,
    fontSize: 15,
  },
  item: {

  }
});