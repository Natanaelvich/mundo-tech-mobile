import {createStore} from 'redux';

const INITIAL_STATE = {
  PRODUTOS: [],
  VENDAS: [],
};

function reducer(state = INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case 'SET_PRODUTO':
      return {
        ...state,
        PRODUTOS: [...action.data],
      };

    case 'SET_VENDAS':
      return {
        ...state,
        VENDAS: [...action.data],
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
