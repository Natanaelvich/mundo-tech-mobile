import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import api from '../../services/api';

export default function Vendas() {
  const [data, setData] = useState([]);

  async function getDados() {
    const response = await api.get('/api/Venda/return-data.php');
    setData(response.data);
  }

  useEffect(() => {
    getDados();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Vendas</Text>
      </View>
      <FlatList
        data={data}
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
        <Text style={styles.vendas}>Vendas : {data.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#7159c1',
  },
  descricao: {
    color: '#7159c1',
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
    backgroundColor: '#f1f1f1',
    marginHorizontal: 70,
  },
  vendas: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7159c1',
  },
});
