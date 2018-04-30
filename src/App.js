import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductLine from './components/ProductLine';
import Header from './components/Header';
import './App.css';
import {showProduct} from './actions/productActions';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    {
                        this.props.products.map(x => <ProductLine key={x.id} onClick={this.props.showProduct} product={x} />)
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);