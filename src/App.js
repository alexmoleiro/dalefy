import React, {Component} from 'react';
import { connect} from 'react-redux';
import ProductLine from './components/ProductLine';
import Header from './components/Header';
import './App.css';


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
            },
            {
                id: "3",
                marca: "Rebook"
            }
        ];
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    {this.products.map(x => <ProductLine key={x.id} product={x}/>)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
};
// const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);