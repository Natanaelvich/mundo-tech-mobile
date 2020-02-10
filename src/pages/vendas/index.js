import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';

import {styles} from './styles';
export default function Vendas({navigation}) {
  const vendas = useSelector(state => state.VENDAS);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtVendas}>Vendas</Text>
      </View>
      <FlatList
        data={vendas}
        keyExtractor={item => String(item._id)}
        renderItem={({item}) => (
          <View key={item._id} style={styles.itemContainer}>
            <View style={styles.headerBox}>
              <Image
                source={{uri: item.product.url_image}}
                style={styles.image}
              />
              <Text style={styles.descricao}>
                Produto : {item.product.name}
              </Text>
            </View>
            <Text style={styles.descricao}>Quantidade : {item.amount}</Text>

            <Text style={styles.descricao}>Data&Hora : {item.createdAt}</Text>
            <Text style={styles.preco}>
              Total : R${item.product.price * item.amount}
            </Text>
          </View>
        )}
      />

      <View style={styles.txtVendas}>
        <Text style={styles.vendas}>Vendas : {vendas.length}</Text>
      </View>
    </View>
  );
}
