const initialState = [
    {
        id: "1",
        marca: "Adidas"
    },
    {
        id: "2",
        marca: "Nike"
    },
    {
        id: "3",
        marca: "Rebook"
    },

];

export const products = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_PRODUCT":
            console.log("Show product with id", action.idProduct);
            return state;
        default:
            return state;
    }
};