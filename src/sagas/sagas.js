import {listFiles, uploadMultipart, getBase64} from './../helpers/googleapi/googledrive';
import {getFilesAction, logoutAction, getFiles} from './../actions/googleDriveActions';
import {put, call, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga';

const gapi = require("./../helpers/googleapi/gapi");

export function* getGoogleDriveFiles() {
    try {
        yield put({type: "GET_FILES_DRIVE_REQUEST"});
        const files = yield call(listFiles);
        yield put({type: "GET_FILES_DRIVE_SUCCESS", files: Object.values(files.result.files)});
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
        const resultado = yield call(getBase64, action.file);
        const mimetype = resultado.split(",")[0].split(";")[0].split(":")[1];
        const base64 = resultado.split(',')[1]
        yield call(uploadMultipart, base64, "sin nombre", mimetype);
        yield put({type: "SENDFILE_SUCCESS"});
        yield delay(2000);
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