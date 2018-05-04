const initialState = [
    {
        id: "1",
        name: "Adidas"
    },
    {
        id: "2",
        name: "Nike"
    },
    {
        id: "3",
        name: "Rebook"
    },

];

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