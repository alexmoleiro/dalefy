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
            <div className="row">
                <div className="col-3 float-left">
                    <img style={{width: '100%'}} src={imagen}/>
                </div>
                <div className="col-8 float-left">
                    <div>No hay mucho texto
                    </div>
                    <button type="button" onClick={this.openAlert.bind()} className="btn btn-success">Click to test how
                        it
                        works
                    </button>
                </div>
            </div>);
    }

    render() {
        return (
            <Provider store={store}>

                <div className="App">
                    <div className="container">
                        {this.pintar_linea()}
                        {this.pintar_linea()}
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
