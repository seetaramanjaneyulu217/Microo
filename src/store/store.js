import { createStore } from "redux";

const initialState = {
    loading: true
};

const reducer = (state = initialState, action) => {

  if(action.type === 'loading') {
    return {
      ...state,
      loading: action.payload
    }
  }


  return state;
};

const store = createStore(reducer);

export default store;