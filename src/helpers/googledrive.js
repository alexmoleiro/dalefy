const gapi = require("./gapi");

export const listFiles = () => {
    let res = gapi.client.drive.files.list({
        'pageSize': 10,
        'fields': "nextPageToken, files(id, name)"
    }).then(function (response) {
        if (!response.status === 200) {
            throw new Error("Are you log in?")
        } else {
            return response;
        }
    });
    return res;
};
