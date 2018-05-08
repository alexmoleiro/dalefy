import {logoutAction} from "./../actions/productActions";

const initialState = {list: [], isFirstLoad: true};

export const products = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_PRODUCT":
            return state;
        case "GET_FILES_DRIVE_SUCCESS":
            return Object.assign({}, state, {list: action.files, isFirstLoad: false});
        case logoutAction:
            return Object.assign({}, state, {list: [], isFirstLoad: true});
        default:
            return state;
    }
};