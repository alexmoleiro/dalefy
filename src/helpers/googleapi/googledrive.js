const gapi = require("./gapi");
const uri = "https://www.googleapis.com/upload/drive/v3/files";
// const uri = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";

export const listFiles = () => {
    let res = gapi.client.drive.files.list({
        'pageSize': 10,
        'q': "trashed=false",
        'fields': "nextPageToken, files (id, name, thumbnailLink, webContentLink, mimeType, trashed, modifiedTime)"
    }).then(function (response) {
        if (!response.status === 200) {
            throw new Error("Are you logged in?")
        } else {
            return response;
        }
    });
    return res;
};

export const UploadFilePromise = (token, file) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        let fd = new FormData();
        xhr.open("POST", uri, true);
        xhr.setRequestHeader("authorization", "Bearer " + token);
        xhr.onload = () => { resolve(xhr.responseText) };
        // xhr.onerror = () => { reject(xhr.statusText) }
        fd.append('myFile', file);
        fd.append('params','{"name":"hola"}');
        xhr.send(fd);
    })
};


export const insertJson= () => {

        const boundary = '-------314159265358979323846264';
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";
        var appState = {
            number: 12,
            text: 'hello'
        };
        var fileName = 'test.json';
        var contentType = 'application/json';
        var metadata = {
            'title': fileName,
            'mimeType': contentType
        };
        var base64Data = btoa(JSON.stringify(appState));
        var multipartRequestBody =
            delimiter +
            'Content-Type: application/json\r\n\r\n' +
            JSON.stringify(metadata) +
            delimiter +
            'Content-Type: ' + contentType + '\r\n' +
            'Content-Transfer-Encoding: base64\r\n' +
            '\r\n' +
            base64Data +
            close_delim;
        var request = gapi.client.request({
            'path': '/upload/drive/v2/files',
            'method': 'POST',
            'params': {'uploadType': 'multipart'},
            'headers': {
                'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
            },
            'body': multipartRequestBody});
        request.execute(function(arg) {
            console.log(arg);
        });
}