const gapi = require("./gapi");

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

export const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};

export const uploadMultipart = (base64Data, fileName, contentType) => {
    return new Promise((resolve, reject) => {
        const boundary = '-------314159265358979323846264';
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";

        const metadata = {
            'name': fileName,
            'mimeType': contentType,
        };
        const multipartRequestBody =
            delimiter +
            'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
            JSON.stringify(metadata) +
            delimiter +
            'Content-Type: ' + contentType + '\r\n' +
            'Content-Transfer-Encoding: base64\r\n' +
            '\r\n' +
            base64Data +
            close_delim;
        const request = gapi.client.request({
            'path': '/upload/drive/v3/files',
            'method': 'POST',
            'params': {'uploadType': 'multipart', 'fields': '*'},
            'headers': {
                'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
            },
            'body': multipartRequestBody
        });
        request.execute(function (arg) {
            resolve(arg);
        });
    });
};

export const updateFileDrive = (fileId, name) => {
    return new Promise((resolve, reject) => {
        const request = gapi.client.request({
            'path': '/drive/v2/files/' + fileId,
            'method': 'PUT',
            'body': {title: name}
        });
        request.execute(function (arg) {
            resolve(arg);
        });
    });
};