const gapi = require("./gapi");

export const listFiles = () => {
    gapi.client.drive.files.list({
        'pageSize': 10,
        'fields': "nextPageToken, files(id, name)"
    }).then(function (response) {
        if (!response.status === 200) {
            throw new Error("Are you log in?")
        } else {
            console.log(response);
        }
    });
};
