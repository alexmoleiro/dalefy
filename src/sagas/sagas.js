import {listFiles, UploadFilePromise, insertJson} from './../helpers/googleapi/googledrive';
import {getFilesAction, logoutAction} from './../actions/googleDriveActions';
import {put, call, takeEvery} from 'redux-saga/effects'


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
    const token = gapi.auth2.getAuthInstance().currentUser.Ab.Zi.access_token;
    yield put({type: "SENDFILE_REQUEST"});

    // const uploadPromise = yield call(UploadFilePromise, token, action.file);
    // if (JSON.parse(uploadPromise).error) {
    //     yield put({type: "SENDFILE_ERROR", message: uploadPromise});
    // } else {
    //     yield put({type: "SENDFILE_SUCCESS"});
    // }
    insertJson(action.file)
}


export function* watchGoogle() {
    yield takeEvery(getFilesAction, getGoogleDriveFiles)
    yield takeEvery(logoutAction, logout);
    yield takeEvery('SEND_FILE', sendFileToGoogleDrive);
}