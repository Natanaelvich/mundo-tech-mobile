import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PromoSlider from '../../components/PromoSlider';
import api from '../../services/api';
import style from './style';
import {useSelector, useDispatch} from 'react-redux';

export default function Main({navigation}) {
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [datas, setDatas] = useState([]);
  const [produto, setProduto] = useState('');
  const ProdutosRedux = useSelector(state => state.PRODUTOS);
  const dispatch = useDispatch();

  useEffect(() => {
    onUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdate = useCallback(async () => {
    setLoadingList(true);
    const response = await api.get('/api/GET/');
    setLoadingList(false);
    setDatas(response.data);
    dispatch(setProdutosRedux(response.data));
    console.log('denovo..');
  }, [dispatch]);

  function setProdutosRedux(data) {
    return {
      type: 'SET_PRODUTO',
      data,
    };
  }
  async function handleAddProduct() {
    setLoading(true);
    const response = await api.get(`/api/GET/?pesquisa=${produto}`);
    setLoading(false);
    setDatas(response.data);
    Keyboard.dismiss();
  }

  return (
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
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
        {loadingList ? (
          <ActivityIndicator color="#111" size={28} />
        ) : (
          <PromoSlider data={ProdutosRedux} nav={navigation.navigate} />
        )}
      </View>
    </View>
  );
}
