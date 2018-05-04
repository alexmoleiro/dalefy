import React, {Component} from 'react';
import {connect} from 'react-redux';
const gapi = require("./../helpers/googleapi/gapi");


class UploadFile extends Component {
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
                    <input type="file" ref={(input) => this.fileInput = input}/>
                </label>
                <input type="submit" value="Submit"/>
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
export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);