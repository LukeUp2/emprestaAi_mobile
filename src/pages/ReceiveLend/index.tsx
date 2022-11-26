import React from 'react';
import { View, Text } from 'react-native';
import { FloatButtonContract } from '../../components/FloatButtonContract';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function ReceiveLend() {
  return (
    <View style={styles.container}>
      <Header title='Receber'/>

      <View>
        <Text>Lista dos itens emprestados</Text>
      </View>

      <FloatButtonContract 
        title="Finalizar Contrato"
        onPress={() => {}}
      />
    </View>
  );
}