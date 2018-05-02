const gapi = require("./gapi");

const CLIENT_ID = '874192150974-bl5i1ij8ig4llnnk861bnld47bnr1a6i.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

export class GoogleDrive {

    constructor() {
        this.initClient = this.initClient.bind(this);
        gapi.load('client:auth2', this.initClient);
    }

    initClient() {
        gapi.client.init({
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(() => {
            const isLogged = this.isLoggedUser();
            if (!isLogged)
                gapi.auth2.getAuthInstance().signIn();
        });
    }

    // handleSignoutClick() {
    //     return gapi.auth2.getAuthInstance().signOut();
    // }

    isLoggedUser() {
        return gapi.auth2.getAuthInstance().isSignedIn.get();
    }

    listFiles() {
        gapi.client.drive.files.list({
            'pageSize': 50,
            'fields': "nextPageToken, files(id, name)"
        }).then(function (response) {
           console.log(response);
        });
    }


}
// gapi.auth2.getAuthInstance().isSignedIn.listen(() => true);
