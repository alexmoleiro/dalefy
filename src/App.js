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

    const
    products = [
        {
            id: "1",
            marca: "Adidas"
        },
        {
            id: "2",
            marca: "Nike"
        }
    ];

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        {this.products.map(x => <ProductLine product={x}/> )}
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
