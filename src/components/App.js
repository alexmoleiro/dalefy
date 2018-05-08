import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductLine from './../components/ProductLine';
import Header from './../components/Header';
import {googleAuthEvent, logout} from './../actions/productActions';
import {getFiles, updateFile} from './../actions/googleDriveActions';
import {conf} from './../helpers/googleapi/gapi_conf';
import {withStyles} from 'material-ui/styles';
import './../css/App.css';

const gapi = require("./../helpers/googleapi/gapi");
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});
class App extends Component {

    constructor(props) {
        super(props);
        this.initClient = this.initClient.bind(this);
        gapi.load('client:auth2', this.initClient); // it gets the auth2 function
        console.log(this.state)
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
        this.props.isAuthenticated && this.props.products.isFirstLoad == true && this.props.getFiles()
        return (
            <div className="App">
                <Header isAuthenticated={this.props.isAuthenticated} logoutAction={() => this.props.logout()}
                        signin={() => gapi.auth2.getAuthInstance().signIn()}/>
                <div className="container">
                    {this.props.isAuthenticated &&
                    this.props.products.list.map(x => <ProductLine  key={x.id} product={x} dispatchUpdate={()=>this.props.updateFile(x.id)}/>) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        isAuthenticated: state.googleauth.isAuthenticated,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        googleAuthEvent: (message) => dispatch(googleAuthEvent(message)),
        getFiles: () => dispatch(getFiles()),
        logout: () => dispatch(logout()),
        updateFile: (fileId) => dispatch(updateFile(fileId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
