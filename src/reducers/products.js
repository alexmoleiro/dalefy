const initialState = [];

export const products = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_PRODUCT":
            return state;
        case "GET_FILES_DRIVE_SUCCESS":
            return Object.assign([],state,action.files)
        default:
            return state;
    }
};