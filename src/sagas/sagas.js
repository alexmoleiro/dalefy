import {listFiles, uploadMultipart, getBase64} from './../helpers/googleapi/googledrive';
import {getFilesAction, logoutAction, getFiles, getFilesDriveSuccess} from './../actions/googleDriveActions';
import {put, call, takeEvery} from 'redux-saga/effects'

const gapi = require("./../helpers/googleapi/gapi");

export function* getGoogleDriveFiles() {
    try {
        yield put({type: "GET_FILES_DRIVE_REQUEST"});
        const files = yield call(listFiles);
        yield put(getFilesDriveSuccess(files.result.files));
    } catch (ex) {
        yield put({type: "GET_FILES_DRIVE_ERROR", message: ex.message});
    }
}

export function* logout() {
    yield gapi.auth2.getAuthInstance().signOut();
}

export function* sendFileToGoogleDrive(action) {

    yield put({type: "SENDFILE_REQUEST"});
    try {
        const base64Object = yield call(getBase64, action.file);
        const mimetype = base64Object.split(",")[0].split(";")[0].split(":")[1];
        const base64 = base64Object.split(',')[1]
        yield call(uploadMultipart, base64, "sin nombre", mimetype);
        yield put({type: "SENDFILE_SUCCESS"});
        yield put(getFiles());
    } catch (ex) {
        yield put({type: "SENDFILE_ERROR", message: ex.message});
    }
}

export function* watchGoogle() {
    yield takeEvery(getFilesAction, getGoogleDriveFiles)
    yield takeEvery(logoutAction, logout);
    yield takeEvery('SEND_FILE', sendFileToGoogleDrive);
}