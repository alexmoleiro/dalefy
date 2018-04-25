import React, {Component} from 'react';
import imagen from './assets/bambas.png';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(
    (state, action) => state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

    openAlert() {
        alert("Hola payo");
    }

    pintar_linea() {
        return (
            <div className="container">
                <div className="col-3 float-left">
                    <img style={{width: '100%'}} src={imagen}/>
                </div>
                <div className="col-8 float-left">
                    <div onClick={this.openAlert.bind()} className="alert alert-success">Click to test how
                        it
                        works
                    </div>
                </div>

            </div>);
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    {this.pintar_linea()}
                    {this.pintar_linea()}
                </div>
            </Provider>
        );
    }
}

export default App;
