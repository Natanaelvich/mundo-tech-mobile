import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 20,
    color: '#999',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  bio: {
    fontSize: 19,
    lineHeight: 18,
    color: '#61B71F',
    marginTop: 5,
    textAlign: 'center',
  },
  qtd: {
    fontSize: 19,
    lineHeight: 18,
    color: '#DE6D16',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default style;
