const gapi = require("./gapi");

export const listFiles = () => {
    let res = gapi.client.drive.files.list({
        'pageSize': 10,
        'fields': "nextPageToken, files (id, name, thumbnailLink, webContentLink, mimeType, trashed, modifiedTime)"
        // 'fields': "nextPageToken, files"
    }).then(function (response) {
        if (!response.status === 200) {
            throw new Error("Are you logged in?")
        } else {
            return response;
        }
    });
    console.log(res);
    return res;
};