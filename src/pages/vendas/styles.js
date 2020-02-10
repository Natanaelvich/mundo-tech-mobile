import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#078BA0',
  },
  itemContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#078BA0',
  },
  headerBox: {
    display: 'flex',
  },
  image: {
    height: 40,
    resizeMode: 'center',
  },
  descricao: {
    color: '#078BA0',
    fontSize: 15,
  },
  preco: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 8,
    borderRadius: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  txtVendas: {
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 70,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
  vendas: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#078BA0',
  },
});
