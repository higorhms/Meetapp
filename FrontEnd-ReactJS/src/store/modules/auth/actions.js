export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    };
}

export function signInSucess() {
    console.log('Sucess executado');
    return {
        type: '@auth/SIGN_IN_SUCESS',
        payload: {},
    };
}
