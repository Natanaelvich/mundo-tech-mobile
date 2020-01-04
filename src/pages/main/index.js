import propTypes from 'prop-types';
import React, {Component} from 'react';
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

export default class Main extends Component {
  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func,
    }).isRequired,
  };

  state = {
    loading: false,
    datas: [],
    produto: '',
  };

  onUpdate = async () => {
    const response = await api.get('/api/GET/');
    this.setState({datas: response.data});
  };
  async componentDidMount() {
    //buscando dados api
    this.onUpdate();
    console.log('oi aki');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.datas !== nextState.datas) {
  //     this.onUpdate();
  //   }
  // }

  handleAddProduct = async () => {
    const {produto} = this.state;
    this.setState({loading: true});
    const response = await api.get(`/api/GET/?pesquisa=${produto}`);
    this.setState({datas: response.data, loading: false});
    Keyboard.dismiss();
  };

  handleNavigate = user => {
    const {navigation} = this.props;
    navigation.navigate('User', {user});
  };

  render() {
    const {loading, datas, produto} = this.state;
    return (
      <View style={style.container}>
        <View style={style.form}>
          <TextInput
            style={style.input}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar Produto"
            value={produto}
            onChangeText={txt => this.setState({produto: txt})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddProduct}
          />
          <RectButton
            loading={loading}
            style={style.button}
            onPress={this.handleAddProduct}>
            {loading ? (
              <ActivityIndicator color="#fff" size={28} />
            ) : (
              <Icon name="search" size={28} color="#fff" />
            )}
          </RectButton>
        </View>

        <View style={style.promoSliderContainer}>
          <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
          <PromoSlider data={datas} nav={this.props.navigation.navigate} />
        </View>
      </View>
    );
  }
}
