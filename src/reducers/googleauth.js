import {isAuthenticatedAction, logoutAction} from "./../actions/productActions";

export const googleauth = (state = {isAuthenticated: false}, action) => {

    switch (action.type) {
        case isAuthenticatedAction:
            return (action.isAuthenticated) ? Object.assign({}, state, {isAuthenticated: true}) : state;
        case logoutAction:
            return Object.assign({}, state, {isAuthenticated: false});
        default:
            return state;
    }
};