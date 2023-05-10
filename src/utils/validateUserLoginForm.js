export const validateUserLoginForm = (values) => {
    const errors = {};

    if (values.username) {
        if (values.username.length < 6) {
            errors.username = 'Username must be atleast 6 characters.'
        } else if (values.username.length > 15) {
            errors.username = 'Username can not be more than 15 characters.'
        }
    }

    if (values.password) {
        if (values.password.length < 8) {
            errors.password = 'Password must be atleast 8 characters.'
        }
    }

    return errors;
};