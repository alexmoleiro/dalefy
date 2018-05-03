import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductLine from './components/ProductLine';
import Header from './components/Header';
import './App.css';
import {showProduct, googleAuthEvent} from './actions/productActions';
import {GoogleDrive} from './helpers/googledrive'
import {conf} from './helpers/gapi_conf';
const gapi = require("./helpers/gapi");


class App extends Component {


    constructor(props) {
        super(props);
        this.googleDrive = new GoogleDrive();
        this.initClient = this.initClient.bind(this);
        gapi.load('client:auth2', this.initClient); // it gets the auth2 function

    }

    initClient() {

        gapi.client.init(conf).then(() => {
            this.updateReduxWithGoogleAuthInfo()
            gapi.auth2.getAuthInstance().isSignedIn.listen(() => this.updateReduxWithGoogleAuthInfo())
        });
    }


    updateReduxWithGoogleAuthInfo() {
            this.props.googleAuthEvent(gapi.auth2.getAuthInstance().isSignedIn.get());
    }

    render() {
        return (
            <div className="App">
                { !this.props.isGoogleAuthenticated && <button onClick={()=>gapi.auth2.getAuthInstance().signIn()}>Log in</button> }
                <div className="container">
                    <Header/>
                    {
                        this.props.products.map(x => <ProductLine key={x.id} onClick={() => this.googleDrive.listFiles()} product={x}/>)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        isGoogleAuthenticated: state.googleauth.isGoogleAuthenticated,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showProduct: (id) => dispatch(showProduct(id)),
        googleAuthEvent: (message) => dispatch(googleAuthEvent(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);