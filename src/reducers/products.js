import {logoutAction} from "./../actions/productActions";
import {getFilesDriveSuccessAction} from './../actions/googleDriveActions'

const initialState = {list: [], isFirstLoad: true};

export const products = (state = initialState, action) => {
    switch (action.type) {
        case getFilesDriveSuccessAction:
            return Object.assign({}, state, {list: action.files, isFirstLoad: false});
        case logoutAction:
            return Object.assign({}, state, {list: [], isFirstLoad: true});
        default:
            return state;
    }
};