import imagen from './assets/bambas.png';

const ProductLine = (props) => {

   return (
        <div className="row">
            <div className="col-3 float-left">
                <img style={{width: '100%'}} src={imagen}/>
            </div>
            <div className="col-8 float-left">
                <div>No hay mucho texto
                </div>
                <button type="button" onClick={this.props.open.bind()} className="btn btn-success">Click to test how
                    it
                    works
                </button>
            </div>
        </div>)
}

export default ProductLine;