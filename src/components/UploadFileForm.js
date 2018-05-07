import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

class UploadFileForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.sendFilesToDrive(this.fileInput.files[0]);
        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="file" onChange={this.handleSubmit} ref={(input) => this.fileInput = input} style={{ display: 'none' }}/>
                </label>
                <Button size="small" variant="raised" color="secondary" aria-label="add">
                    <AddIcon onClick={()=>this.fileInput.click()}  />
                </Button>
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendFilesToDrive: (file) => dispatch({type: "SEND_FILE", file: file}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadFileForm);