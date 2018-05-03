const gapi = require("./gapi");


export class GoogleDrive {


    listFiles() {
        gapi.client.drive.files.list({
            'pageSize': 50,
            'fields': "nextPageToken, files(id, name)"
        }).then(function (response) {
           if(response.status===200) {
               throw new Error("Are you log in?")
           }
        });
    }


}
