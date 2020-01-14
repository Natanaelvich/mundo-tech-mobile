import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import api from '../../services/api';
import {useSelector, useDispatch} from 'react-redux';

export default function Vendas({navigation}) {
  const [data, setData] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const Vendas = useSelector(state => state.VENDAS);
  const dispatch = useDispatch();

  async function getDados() {
    setLoadingList(true);
    const response = await api.get('/api/Venda/return-data.php');
    setLoadingList(false);
    setData(response.data);
  }

  useEffect(() => {
    getDados();
    console.log('vendas denovo');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtVendas}>Vendas</Text>
      </View>
      {loadingList ? (
        <ActivityIndicator color="#111" size={28} />
      ) : (
        <FlatList
          data={Vendas}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <View key={item.id} style={styles.itemContainer}>
              <Text>Codigo : {item.id} </Text>
              <Text style={styles.descricao}>Produto : {item.descricao}</Text>
              <Text style={styles.descricao}>
                Quantidade : {item.quantidade}
              </Text>

              <Text style={styles.descricao}>
                Data&Hora : {item.created_at}
              </Text>
              <Text style={styles.preco}>
                Total : R${item.preco * item.quantidade}
              </Text>
            </View>
          )}
        />
      )}

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
    backgroundColor: '#7159c1',
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
    marginHorizontal: 70,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
  vendas: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7159c1',
  },
});
