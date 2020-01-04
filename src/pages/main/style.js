import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  promoSliderContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  form: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
    borderRadius: 4,
    marginLeft: 10,
    paddingHorizontal: 12,
    // opacity : `${props=>(props.loading ? 0.7 : 1)}`,
  },
  user: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  list: {},
  name: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
  },
  bio: {
    fontSize: 13,
    lineHeight: 18,
    color: '#999',
    marginTop: 5,
    textAlign: 'center',
  },
  buttonUser: {
    marginTop: 10,
    alignSelf: 'stretch',
    borderRadius: 4,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  textButtonmUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default style;
