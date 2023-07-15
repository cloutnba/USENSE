export function containsOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

export function containsOnlySymbols(str) {
    return /^[^\w\s]+$/.test(str);
}

export function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

export function validatePasswordMedium(str) {
    return /^(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z\s])|(?=.*\d)(?=.*[^a-zA-Z\d\s])/.test(str);
}


export function validatePasswordStrong(str) {
    return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^\w\s])/.test(str);
}