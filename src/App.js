import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ProductLine from './ProductLine';
import './App.css';

const store = createStore(
    (state, action) => state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export class App extends Component {
    constructor(props) {
        super(props);
        this.products = [
            {
                id: "1",
                marca: "Adidas"
            },
            {
                id: "2",
                marca: "Nike"
            }
        ];
    }
  
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        {this.products.map(x => <ProductLine key={x.id} product={x}/> )}
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;