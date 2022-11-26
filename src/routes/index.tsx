import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../pages/Home'
import Icon from '@expo/vector-icons/FontAwesome5';
import { theme } from '../utils/theme'
import { ReceiveLend } from '../pages/ReceiveLend';
import { CreateLend } from '../pages/CreateLend';
import { Text } from 'react-native'
import { TabBarItem } from '../components/TabBarItem';

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen 
        name="Home" 
        options={{
          tabBarIcon: (({ focused }) => (
            <TabBarItem 
              title='Home'
              icon="home"
              focused={focused}
            />
          ))
        }}
        component={Home}
      />
      <Tab.Screen 
        name="ReceiveLend" 
        options={{
          tabBarIcon: (({ focused }) => (
           <TabBarItem 
            icon="box-open"
            title="Receber"
            focused={focused}
           />
          ))
        }}
        component={ReceiveLend}
      />
      <Tab.Screen 
        name="CreateLend" 
        options={{
          tabBarIcon: (({ focused }) => (
            <TabBarItem 
              icon="hands-helping"
              title="Emprestar"
              focused={focused}
            />
          ))
        }}
        component={CreateLend}
      />
    </Tab.Navigator>
  )
}