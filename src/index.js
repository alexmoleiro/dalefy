import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {products} from './reducers/products';
import {googleauth} from './reducers/googleauth';
import createSagaMiddleware from 'redux-saga'
import {watchGoogle} from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({products, googleauth});
const store = createStore(  reducers,
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                            applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchGoogle);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
