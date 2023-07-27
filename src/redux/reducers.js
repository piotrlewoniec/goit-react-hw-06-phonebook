import { combineReducers } from 'redux';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Dodaj inne reduktory, jeśli są dostępne
});

export default rootReducer;
