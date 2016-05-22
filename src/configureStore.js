import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const buildStore = compose(applyMiddleware(reduxThunk))(createStore);

export default function configureStore(initialState) {
  return buildStore(reducers, initialState);
}
