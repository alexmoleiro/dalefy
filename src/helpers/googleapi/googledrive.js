const gapi = require("./gapi");

export const listFiles = () => {
    let res = gapi.client.drive.files.list({
        'pageSize': 10,
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

export const UploadFilePromise = (uri, token, file) => {
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