import {getGoogleDriveFiles} from './sagas';
import {put, call} from 'redux-saga/effects';
import {listFiles} from './../helpers/googleapi/googledrive';

describe("saga testing", () => {

    test('first action should be GET_FILES_DRIVE_REQUEST', () => {
        const gen = getGoogleDriveFiles();
        expect(gen.next().value).toEqual(
            put({type: "GET_FILES_DRIVE_REQUEST"})
        );
    });

    test('should get side effects', () => {
        const gen = getGoogleDriveFiles();
        gen.next().value;
        expect(gen.next().value).toEqual(
            call(listFiles)
        );
    });



});