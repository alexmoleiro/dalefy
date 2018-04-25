import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ProductLine from './ProductLine';

const store = createStore(
    (state, action) => state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

    openAlert(name) {
        alert(name);
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <ProductLine open={this.openAlert.bind(this)} marca="Adidas"/>
                        <ProductLine open={this.openAlert.bind(this)} marca="Nike"/>
                    </div>
                </div>
            </Provider>
        );
    }
}


export default App;
