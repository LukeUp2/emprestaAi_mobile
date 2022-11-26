import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  title: string
  onPress: () => void;
}

export function FloatButtonContract({ title, onPress }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}