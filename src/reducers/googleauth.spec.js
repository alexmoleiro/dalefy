import {googleauth} from './googleauth';
import {googleAuthEvent} from './../actions/productActions';
import {logoutAction} from './../actions/googleDriveActions';

describe("googleauth reducer", () => {

    test('isAuthenticated=true when googleAuthEvent(true) is dispatched', () => {

        const initialState = {}
        const googleAuthState = googleauth(initialState, googleAuthEvent(true));
        const expected = {"isAuthenticated": true}
        expect(googleAuthState).toEqual(expected);

    });

    test('isAuthenticated=false when logoutAction is dispatched', () => {

        const initialState = {}
        const googleAuthState = googleauth(initialState, {type:logoutAction});
        const expected = {"isAuthenticated": false}
        expect(googleAuthState).toEqual(expected);

    });

});