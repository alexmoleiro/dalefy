import {isAuthenticatedAction,logoutAction} from "./../actions/productActions";

export const googleauth = (state = {isAuthenticated: false}, action) => {

    if (action.type === isAuthenticatedAction) {
        switch (action.isAuthenticated) {
            case true:
                return Object.assign({}, state, {isAuthenticated: true});
            default:
                return state;
        }
    } else if (action.type === logoutAction) {
        return Object.assign({}, state, {isAuthenticated: false});
    }
    else {
        return state;
    }
};