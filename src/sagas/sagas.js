import {listFiles} from './../helpers/googledrive';
import { put, takeEvery } from 'redux-saga/effects'

export function* getGoogleDriveFiles() {
    try {
        yield put({type: "GET_FILES_DRIVE_REQUEST"});
        const files = yield listFiles();
        yield put({type: "GET_FILES_DRIVE_SUCCESS",files:files.result.files});
    } catch(ex){
        yield put({type: "GET_FILES_DRIVE_ERROR"});
    }
}

export function* watchGoogle() {
    yield takeEvery('GET_FILES', getGoogleDriveFiles)
}