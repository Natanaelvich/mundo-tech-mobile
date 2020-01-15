import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

export default function Vendas({navigation}) {
  const vendas = useSelector(state => state.VENDAS);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtVendas}>Vendas</Text>
      </View>
      <FlatList
        data={vendas}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text>Codigo : {item.id} </Text>
            <Text style={styles.descricao}>Produto : {item.descricao}</Text>
            <Text style={styles.descricao}>Quantidade : {item.quantidade}</Text>

            <Text style={styles.descricao}>Data&Hora : {item.created_at}</Text>
            <Text style={styles.preco}>
              Total : R${item.preco * item.quantidade}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#078BA0',
  },
  itemContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#078BA0',
  },
  descricao: {
    color: '#078BA0',
    fontSize: 15,
  },
  preco: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 8,
    borderRadius: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  txtVendas: {
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 70,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
  vendas: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#078BA0',
  },
});
