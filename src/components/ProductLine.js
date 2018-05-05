import React from 'react';

const ProductLine = (props) => {
    const {product, onClick} = props;

    return (
        <div className="row">
            <div className="col-3 float-left">
                <img alt=""  src={product.thumbnailLink}/>
            </div>
            <div className="col-8 float-left text-left">
                <h1>{product.name}</h1>
                <div>No hay mucho texto
                </div>
                <button type="button" className="btn btn-success" onClick={() => onClick(product.id)}>Click to test how
                    it
                    works
                </button>
            </div>
        </div>)
}

export default ProductLine;