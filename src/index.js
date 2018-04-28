import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { reducera } from './reducers/reducer';

const reducers = combineReducers(reducera);

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
// registerServiceWorker();
