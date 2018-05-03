export const getProcuctsAction = "GET_PRODUCTS";
export const isAuthenticatedAction = "IS_AUTHENTICATED";

export function showProduct(idProduct) {
    return {
        type: "SHOW_PRODUCT",
        idProduct
    }
}

export function getProducts() {
    return {
        type: getProcuctsAction,
    }
}

export function googleAuthEvent(isAuthenticated) {
    return {
        type: isAuthenticatedAction,
        isAuthenticated
    }
}