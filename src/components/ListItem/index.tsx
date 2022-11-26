import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  data: {
    itemName: string,
    providerName?: string
    receiverName?: string
    contact: string
  }
}

export function ListItem({data}: Props) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.itemName}</Text>
      <View style={styles.content}>
        {data.providerName ? 
          <>
            <Text style={styles.label}>
              Quem emprestou pra você: {data.providerName}
            </Text> 
          </>
          : 
          <>
            <Text style={styles.label}>
              Pra quem você emprestou: {data.receiverName}
            </Text> 
            
          </>
        }
      </View>
      <Text style={styles.label}>Contato: {data.contact}</Text>
    </View>
  );
}