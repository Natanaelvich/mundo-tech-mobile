import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import {SCLAlert} from 'react-native-scl-alert';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';

import api from '../../services/api';
import style from './styles';
import NoConnection from '../../components/noConnection';

export default function Venda({navigation}) {
  const dispatch = useDispatch();

  const [number, setnumber] = useState(1);
  const [total, settotal] = useState(navigation.getParam('Product').preco);
  const [show, setshow] = useState(false);
  const [notConnection, setNotConnection] = useState(false);
  const product = navigation.getParam('Product');

  function handleOpen() {
    setshow(true);
    const totais = total * number;
    console.log(totais);
    settotal(totais);
  }

  function handleClose() {
    setshow(false);
    settotal(navigation.getParam('Product').preco);
  }

  function setProdutos(data) {
    return {
      type: 'SET_PRODUTO',
      data,
    };
  }

  function setVendas(data) {
    return {
      type: 'SET_VENDAS',
      data,
    };
  }

  // verificar internet e vender produto
  function venderProduct() {
    NetInfo.fetch().then(async state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      if (!state.isInternetReachable) {
        setNotConnection(true);
      } else {
        const id = navigation.getParam('Product').id;
        const quantidade = number;

        await api.post('/api/Venda/', {
          id: id,
          quantidade: quantidade,
          total: total,
          user: 'natanvich',
          pass: 'natanvich1997',
        });

        const responseProdutos = await api.get('/api/GET/');
        dispatch(setProdutos(responseProdutos.data));

        const responseVendas = await api.get('/api/Venda/return-data.php');
        dispatch(setVendas(responseVendas.data));
        navigation.navigate('Main');
      }
    });
  }

  // verificar internet e fazer refersh

  function refresh() {
    NetInfo.fetch().then(async state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      if (!state.isInternetReachable) {
        Alert.alert('conectes-se a internet e tente novamente');
      } else {
        setNotConnection(false);
      }
    });
  }

  return (
    <>
      {notConnection ? (
        <NoConnection function={refresh} />
      ) : (
        <View style={style.container}>
          <View style={style.header}>
            <Image source={{uri: product.avatar}} style={style.avatar} />
            <Text style={style.name}>{product.descricao}</Text>
            <Text style={style.bio}>Preço : R$ {product.preco}</Text>
            <Text style={style.qtd}>Quantidade : {product.quantidade}</Text>
          </View>
          <View style={styles.contentBody}>
            <InputSpinner
              max={10}
              min={1}
              step={1}
              colorMax={'#f04048'}
              colorMin={'#40c5f4'}
              value={number}
              onChange={num => {
                setnumber(num);
              }}
            />

            <TouchableOpacity style={styles.buttonVenda} onPress={handleOpen}>
              <Text style={styles.txtButtonVenda}>Vender</Text>
            </TouchableOpacity>
            <SCLAlert
              onRequestClose={handleClose}
              theme="warning"
              show={show}
              title="Confirmar?"
              subtitle="veja se as informações coferem">
              <View style={styles.areaConfirm}>
                <Text style={style.name}>{product.descricao}</Text>
                <Text style={style.bio}>Preço : R$ {product.preco}</Text>
                <Text style={style.qtd}>Venda : {number}</Text>
                <Text style={styles.totalTXT}>Total : R$ {total}</Text>
                <TouchableOpacity
                  style={styles.buttonVenda}
                  onPress={venderProduct}>
                  <Text style={styles.txtButtonVenda}>Vender</Text>
                </TouchableOpacity>
              </View>
            </SCLAlert>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonVenda: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 30,
    backgroundColor: '#7159c1',
    marginTop: 40,
  },
  txtButtonVenda: {fontSize: 20, fontWeight: 'bold', color: '#fff'},
  totalTXT: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#166D0B',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  areaConfirm: {
    alignItems: 'center',
  },
  contentBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});