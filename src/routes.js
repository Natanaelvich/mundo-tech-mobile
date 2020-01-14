import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from './pages/main';
import Venda from '././pages/venda';
import Vendas from './pages/vendas';
Main.navigationOptions = {
  tile: 'Main',
};
const saidaRoute = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Saída',
      },
    },
    Venda: {
      screen: Venda,
      navigationOptions: {
        title: 'Venda',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      headerTintColor: '#fff',
    },
  },
);

//tab navigate
const MenuRoutes = {
  Main: {
    name: 'Saída',
    screen: saidaRoute,
    navigationOptions: {
      title: 'Saída',
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={30} color={tintColor} />
      ),
    },
  },
  Vendas: {
    screen: Vendas,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="list" size={30} color={tintColor} />
      ),
    },
  },
};

const MenuConfig = {
  initialRouteName: 'Main',
  tabBarOptions: {
    showLabel: false,
  },
};

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);
export default createAppContainer(MenuNavigator);
