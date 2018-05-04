import {listFiles, uploadFile} from './../helpers/googleapi/googledrive';
import {put, call, takeEvery} from 'redux-saga/effects'
const gapi = require("./../helpers/googleapi/gapi");

export function* getGoogleDriveFiles() {
    try {
        yield put({type: "GET_FILES_DRIVE_REQUEST"});
        const files = yield listFiles();
        yield put({type: "GET_FILES_DRIVE_SUCCESS", files: Object.values(files.result.files)});
    } catch (ex) {
        yield put({type: "GET_FILES_DRIVE_ERROR", message: ex.message});
    }
}

export function* logout() {
    yield gapi.auth2.getAuthInstance().signOut();
}

export function* sendFileToGoogleDrive(action) {
    const file = action.file;
    var uri = "https://www.googleapis.com/upload/drive/v3/files";

    const UploadFilePromise = () => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            let fd = new FormData();
            xhr.open("POST", uri, true);
            const token = gapi.auth2.getAuthInstance().currentUser.Ab.Zi.access_token;
            xhr.setRequestHeader("authorization", "Bearer " + token);
            xhr.onload = () => { resolve(xhr.responseText) }
            // xhr.onerror = () => { reject(xhr.statusText) }
            fd.append('myFile', file);
            xhr.send(fd);

        })
    };
    yield put({type: "SENDFILE_REQUEST"});

    const uploadPromise = yield call(UploadFilePromise);
    if (JSON.parse(uploadPromise).error) {
        yield put({type: "SENDFILE_ERROR", message: uploadPromise});
    } else {
        yield put({type: "SENDFILE_SUCCESS"});
    }
}


export function* watchGoogle() {
    yield takeEvery('GET_FILES', getGoogleDriveFiles)
    yield takeEvery('LOGOUT', logout);
    yield takeEvery('SEND_FILE', sendFileToGoogleDrive);
}