// Author: Dhruvil Trivedi
// This is the validation error page for login, where all the error messages are set.

export const loginValidation = (email:string, password:string) => {
    let errors = {
        email: '',
        password: ''
    }

    if(!email){
        errors.email = 'email is required';
    }

    if(!password){
        errors.password = "password is required"
    }
    else if (password.length < 5){
        errors.password = "password must be at least 5 characters"
    }

    return errors;
}

