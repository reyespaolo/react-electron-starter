import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './config/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import counterReducer from './store/reducers/counterReducer'
import resultReducer from './store/reducers/resultReducer'

const rootReducer = combineReducers({
  counter:counterReducer,
  result: resultReducer
})

const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log('Middleware', store.getState())
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
