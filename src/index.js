import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './config/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import counterReducer from './store/reducers/counterReducer'
import resultReducer from './store/reducers/resultReducer'

const rootReducer = combineReducers({
  counter:counterReducer,
  result: resultReducer
})
const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
