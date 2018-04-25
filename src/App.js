import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ProductLine from 'ProductLine';

const store = createStore(
    (state, action) => state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

    openAlert() {
        alert("Hola payo");
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <ProductLine open={this.openAlert}/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
