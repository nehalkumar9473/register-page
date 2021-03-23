
export function mobileValidator(mobile) {
    const re = /^[0]?[789]\d{9}$/;
    if (!mobile) return "mobile can't be empty."
    if (!re.test(mobile)) return 'Ooops! We need a valid mobile address.'
    return ''
}
