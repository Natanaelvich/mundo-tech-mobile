import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {
  PromoSliderList,
  PromoSliderItem,
  PromoSliderImage,
  PromoSliderFooter,
  PromoSliderTitle,
} from './styles';

export default class PromoSlider extends PureComponent {
  state = {
    img: 'http://apinatanaelima-com.umbler.net/api/imgs/carregador.png',
  };
  handleNavigate = Product => {
    const {nav} = this.props;

    nav('Venda', {Product});
  };

  render() {
    return (
      <PromoSliderList
        nav={this.props.navigation}
        data={this.props.data}
        keyExtractor={item => String(item._id)}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => this.handleNavigate(item)}>
            <PromoSliderItem>
              <PromoSliderImage
                resizeMode="contain"
                source={{uri: item.url_image}}
              />
              <PromoSliderTitle>
                <Text numberOfLines={1}>{item.name}</Text>
              </PromoSliderTitle>
              <PromoSliderFooter>
                <Text style={styles.txtPreco}>R$ {item.preco}</Text>
                <Text> Quanti.. : </Text>
                <Text style={styles.txtDescricao}>{item.amount}</Text>
              </PromoSliderFooter>
            </PromoSliderItem>
          </TouchableOpacity>
        )}
      />
    );
  }
}

PromoSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const styles = StyleSheet.create({
  txtPreco: {
    color: '#4CCA4C',
  },
  txtDescricao: {
    color: '#EB5F15',
  },
});
