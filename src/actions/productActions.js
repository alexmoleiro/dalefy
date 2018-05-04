export const getProcuctsAction = "GET_PRODUCTS";
export const isAuthenticatedAction = "IS_AUTHENTICATED";
export const logoutAction = "LOGOUT";

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

export function logout() {
    return {
        type: logoutAction,
    }
}