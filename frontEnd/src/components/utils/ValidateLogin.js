export default function validateLogin(form) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errors = {

        email:
            form.email.length === 0
                ? "This input must contain something"
                : !regexEmail.test(form.email)
                ? "Must be a valid email address"
                : "",
        password:
            form.password.length === 0
                ? "This input must contain something"
                : ""
    };

    return errors;
}