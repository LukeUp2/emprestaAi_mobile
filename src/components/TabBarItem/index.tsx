import React from 'react';
import { Text } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';

import { styles } from './styles';
import { theme } from '../../utils/theme';

interface Props {
  title: string
  focused: boolean
  icon: string
}

export function TabBarItem({ title, focused, icon }: Props) {
  return (
    <>
      <Icon 
        name={icon}
        size={focused ? 27 : 23}
        color={focused ? theme.colors.dark_27 : theme.colors.darker_10}
      />
      <Text 
        style={[styles.title, { color: focused ? '#000' : theme.colors.darker_10}]}
      >
        {title}
      </Text>
    </>
  );
}