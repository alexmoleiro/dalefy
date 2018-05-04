import React, {Component} from 'react';
const gapi = require("./../helpers/googleapi/gapi");


class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.sendFile(this.fileInput.files[0]);
        event.preventDefault();
    }

    sendFile(file) {
        var uri = "https://www.googleapis.com/upload/drive/v3/files";
        var xhr = new XMLHttpRequest();
        var fd = new FormData();

        xhr.open("POST", uri, true);
        xhr.setRequestHeader("authorization","Bearer ya29.GlyxBbg1tCwMc-PbL7GJsJ_QWy_d-An69byhDhNkypldS5czp3iZ7x1ZeHTA5xqCYoZnRIeEFoOn0TFMIRzhDLEni2v8759Hs_SPj5UEEvWV7EKF62digwFnKF7lmg");
        xhr.withCredentials = true;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        };
        fd.append('myFile', file);
        xhr.send(fd);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ficherito:
                    <input type="text" ref={(input) => this.input = input}/>
                    <input type="file" ref={(input) => this.fileInput = input}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default UploadFile;