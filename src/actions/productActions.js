export const isAuthenticatedAction = "IS_AUTHENTICATED";
export const logoutAction = "LOGOUT";



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