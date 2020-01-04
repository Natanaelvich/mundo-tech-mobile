import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Slider from '@react-native-community/slider';

import api from '../../services/api';
import style from './styles';

export default class Produto extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('Product').descricao,
    };
  };

  state = {
    stars: [],
    data: '',
    number: 1,
  };
  venderProduct = async () => {
    const {navigation} = this.props;
    const id = navigation.getParam('Product').id;
    const quantidade = this.state.number;

    await api.post('/api/Venda/', {
      id: id,
      quantidade: quantidade,
      user: 'natanvich',
      pass: 'natanvich1997',
    });
    navigation.navigate('Main', {id, quantidade});
  };

  render() {
    const {navigation} = this.props;
    const {number} = this.state;
    const product = navigation.getParam('Product');

    return (
      <View style={style.container}>
        <View style={style.header}>
          <Image
            source={{
              uri:
                'http://apinatanaelima-com.umbler.net/api/imgs/carregador.png',
            }}
            style={style.avatar}
          />
          <Text style={style.name}>{product.descricao}</Text>
          <Text style={style.bio}>Preço : {product.preco}</Text>
          <Text style={style.qtd}>Quantidade : {product.quantidade}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>{number}</Text>
          <Slider
            style={{width: 300, height: 10}}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#eee"
            maximumTrackTintColor="#000000"
            step={1}
            value={1}
            onValueChange={value => this.setState({number: value})}
          />
          <TouchableOpacity
            style={{
              paddingHorizontal: 100,
              paddingVertical: 20,
              borderRadius: 30,
              backgroundColor: '#7159c1',
              marginTop: 40,
            }}
            onPress={this.venderProduct}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
              Vender
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
