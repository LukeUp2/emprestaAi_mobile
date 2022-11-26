import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Copyright } from '../../components/Copyright';
import { Header } from '../../components/Header';
import { ListItem } from '../../components/ListItem';
import { theme } from '../../utils/theme';

import { styles } from './styles';


export function Home() {

  const receivedItens = [
    { id: '1', receiverName: 'Carlos', itemName: 'Bola de Volei', contact: '92984080648', dateLimit: '28/11/2022' },
    { id: '2', receiverName: 'Eduardo', itemName: 'Caixa de Materiais', contact: '92984080648', dateLimit: '29/11/2022' },
    { id: '4', receiverName: 'Miguel', itemName: 'Toalha de Mesa', contact: '92984080648', dateLimit: '04/12/2022' },
    { id: '9', receiverName: 'Carlos', itemName: 'Bola de Volei', contact: '92984080648', dateLimit: '28/11/2022' },
    { id: '23', receiverName: 'Eduardo', itemName: 'Caixa de Materiais', contact: '92984080648', dateLimit: '29/11/2022' },
    { id: '98', receiverName: 'Miguel', itemName: 'Toalha de Mesa', contact: '92984080648', dateLimit: '04/12/2022' },
  ]
  

  const providedItens = [
    { id: '3', providerName: 'Roberto', itemName: 'Pincel', contact: '92984080648', dateLimit: '30/11/2022' },
    { id: '45', providerName: 'Zé', itemName: 'Câmera Fotográfica', contact: '92984080648', dateLimit: '28/11/2022' },
    { id: '89', providerName: 'Guto', itemName: 'Morango de Plástico', contact: '92984080648', dateLimit: '28/11/2022' },
  ]
  return (
    <View style={styles.container}>
      <Header title="Meus contratos"/>

      <View style={styles.content}>
          <Text style={styles.listTitle}>O que você emprestou</Text>
          <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal
            data={receivedItens}
            renderItem={({ item }) => (
              <ListItem data={item}/>
            )}
          />
      </View>
      <View style={styles.content}>
          <Text style={styles.listTitle}>O que você pegou emprestado</Text>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={providedItens}
            renderItem={({ item }) => (
              <ListItem data={item}/>
            )}
          />
      </View>

      <Copyright />
    </View>
  );
}