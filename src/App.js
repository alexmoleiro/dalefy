import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductLine from './components/ProductLine';
import Header from './components/Header';
import './App.css';
import {showProduct, showLogin} from './actions/productActions';
import {GoogleDrive} from './helpers/googledrive'
const gapi = require("./helpers/gapi");

const CLIENT_ID = '874192150974-bl5i1ij8ig4llnnk861bnld47bnr1a6i.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

class App extends Component {


    constructor(props) {
        super(props);
        this.googleDrive = new GoogleDrive();
        this.initClient = this.initClient.bind(this);
        gapi.load('client:auth2', this.initClient);

    }

    initClient() {

        gapi.client.init({
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(() => {
            const isLogged = this.isLoggedUser();
            if (!isLogged) {
                this.props.loguea("No Logueado");
            }
            else {
                this.props.loguea("Logueado");
            }
        });
    }
    showLogin() {
        gapi.auth2.getAuthInstance().signIn();
    }

    isLoggedUser() {
        return gapi.auth2.getAuthInstance().isSignedIn.get();
    }

    render() {

        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    {
                        this.props.products.map(x => <ProductLine key={x.id}
                                                                  onClick={() => this.googleDrive.listFiles()}
                                                                  product={x}/>)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showProduct: (id) => dispatch(showProduct(id)),
        loguea: (message) => dispatch(showLogin(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);