import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StatusBar,
  TextInput,
  View,
  Alert,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NetInfo from '@react-native-community/netinfo';
import {useSelector, useDispatch} from 'react-redux';

import PromoSlider from '../../components/PromoSlider';
import api from '../../services/api';
import style from './style';
import NoConnection from '../../components/noConnection';

export default function Main({navigation}) {
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [produto, setProduto] = useState('');
  const [notConnection, setNotConnection] = useState(false);
  const ProdutosRedux = useSelector(state => state.PRODUTOS);
  const dispatch = useDispatch();

  useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      if (!state.isInternetReachable) {
        setNotConnection(true);
      } else {
        onUpdate();
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onUpdate() {
    setLoadingList(true);
    const response = await api.get('/api/GET/');
    setLoadingList(false);
    dispatch(setProdutosRedux(response.data));
    const responseVendas = await api.get('/api/Venda/return-data.php');
    dispatch(setVendas(responseVendas.data));
  }

  function setProdutosRedux(data) {
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
  async function handleAddProduct() {
    setLoading(true);
    const response = await api.get(`/api/GET/?pesquisa=${produto}`);
    setLoading(false);
    dispatch(setProdutosRedux(response.data));
    Keyboard.dismiss();
  }

  function refresh() {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      if (!state.isInternetReachable) {
        Alert.alert('conecte-se a uma rede e tente novamamente');
        setNotConnection(true);
      } else {
        onUpdate();
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
          <View style={style.form}>
            <TextInput
              style={style.input}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Buscar Produto"
              value={produto}
              onChangeText={txt => setProduto(txt)}
              returnKeyType="send"
              onSubmitEditing={handleAddProduct}
            />
            <RectButton
              loading={loading}
              style={style.button}
              onPress={handleAddProduct}>
              {loading ? (
                <ActivityIndicator color="#fff" size={28} />
              ) : (
                <Icon name="search" size={28} color="#fff" />
              )}
            </RectButton>
          </View>
          <View style={style.promoSliderContainer}>
            <StatusBar backgroundColor="#078BA0" barStyle="light-content" />
            {loadingList ? (
              <ActivityIndicator color="#111" size={28} />
            ) : (
              <PromoSlider data={ProdutosRedux} nav={navigation.navigate} />
            )}
          </View>
        </View>
      )}
    </>
  );
}
