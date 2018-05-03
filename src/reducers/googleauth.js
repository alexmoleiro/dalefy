export const googleauth = (state = {isGoogleAuthenticated: false}, action) => {

    if (action.type === "IS_AUTHENTICATED") {
        switch (action.isGoogleAuthenticated) {
            case true:
                return Object.assign({}, state, {isGoogleAuthenticated: true});
            default:
                return state;
        }
    }
    else {
        return state;
    }
};