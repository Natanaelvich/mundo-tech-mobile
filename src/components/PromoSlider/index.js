import React, {PureComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {
  PromoSliderList,
  PromoSliderItem,
  PromoSliderImage,
  PromoSliderFooter,
  PromoSliderTitle,
} from './styles';

import {Separator} from '../RestaurantList/styles';

export default class PromoSlider extends PureComponent {
  state = {
    img: 'http://apinatanaelima-com.umbler.net/api/imgs/carregador.png',
  };
  handleNavigate = Product => {
    const {nav} = this.props;

    nav('User', {Product});
  };

  render() {
    const {img} = this.state;

    return (
      <PromoSliderList
        nav={this.props.navigation}
        data={this.props.data}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => this.handleNavigate(item)}>
            <PromoSliderItem>
              <PromoSliderImage source={{uri: img}} />
              <PromoSliderTitle>
                <Text>{item.descricao}</Text>
              </PromoSliderTitle>
              <PromoSliderFooter>
                <Text style={{color: '#4CCA4C'}}>R$ {item.preco}</Text>
                <Separator />
                <Text> Quantidade : </Text>
                <Text style={{color: '#EB5F15'}}>{item.quantidade}</Text>
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
