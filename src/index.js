import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {products} from './reducers/products';
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

const reducers = combineReducers({products});
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
