import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import back from '../../../assets/sem-conexao.png';
// import { Container } from './styles';

export default function NoConnection(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={back}
        style={styles.ImageBackground}
        resizeMode="contain">
        <TouchableOpacity style={styles.buttonRefresh} onPress={props.function}>
          <Text style={styles.txtRefresh}>TENTE NOVAMENTE</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  buttonRefresh: {
    backgroundColor: '#078BA0',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  txtRefresh: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
