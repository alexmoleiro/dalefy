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
        const token = gapi.auth2.getAuthInstance().currentUser.Ab.Zi.access_token;
        xhr.setRequestHeader("authorization","Bearer "+token);
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
                    <input type="file" ref={(input) => this.fileInput = input}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default UploadFile;