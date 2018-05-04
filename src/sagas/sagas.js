import {listFiles, uploadFile} from './../helpers/googledrive';
import { put, takeEvery } from 'redux-saga/effects'
const gapi = require("./../helpers/gapi");

export function* getGoogleDriveFiles() {
    try {
        yield put({type: "GET_FILES_DRIVE_REQUEST"});
        const files = yield listFiles();
       // yield uploadFile();
        yield put({type: "GET_FILES_DRIVE_SUCCESS",files:Object.values(files.result.files)});
    } catch(ex){
        yield put({type: "GET_FILES_DRIVE_ERROR",message:ex.message});
    }
}

export function* logout(){
    yield gapi.auth2.getAuthInstance().signOut();
}

export function* watchGoogle() {
    yield takeEvery('GET_FILES', getGoogleDriveFiles)
    yield takeEvery('LOGOUT', logout);
}