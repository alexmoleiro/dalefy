import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore((state,action)=>state);

class App extends Component {

    openAlert() {
        alert("Hola payo");
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="container">
                        <div onClick={this.openAlert.bind()} className="alert alert-success col-3">Click to test how it
                            works
                        </div>
                        <div className="btn-danger col-4">Te aseguro que es bootstrap</div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
