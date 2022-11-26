import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native'
import {
  useFonts,
  Roboto_400Regular, 
  Roboto_500Medium,
  Roboto_700Bold, 
  Roboto_900Black
} from '@expo-google-fonts/roboto'
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium,
    Roboto_700Bold, 
    Roboto_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  if(!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <NavigationContainer>
      <StatusBar style='light' translucent={false}/>
      <Routes />
    </NavigationContainer>
  );
}

