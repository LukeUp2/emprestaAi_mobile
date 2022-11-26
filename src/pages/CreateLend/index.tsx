import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FloatButtonContract } from '../../components/FloatButtonContract';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function CreateLend() {
  return (
    <View style={styles.container}>
      <Header title="Emprestar"/>

      <View>
        <Text>Formulário para emprestar um item</Text>
      </View>

      <FloatButtonContract 
        title="Criar Contrato +"
        onPress={() => {}}
      />
    </View>
  );
}