export function showProduct(idProduct) {
    return {
        type: "SHOW_PRODUCT",
        idProduct
    }
}

export function showLogin(message) {
    return {
        type: "SHOW_LOGIN",
        message

    }
}