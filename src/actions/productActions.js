export function showProduct(idProduct) {
    return {
        type: "SHOW_PRODUCT",
        idProduct
    }
}

export function googleAuthEvent(isGoogleAuthenticated) {
    return {
        type: "IS_AUTHENTICATED",
        isGoogleAuthenticated
    }
}