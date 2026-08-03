
export default function validateRegister(form){

    const regexName = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

    const errors={
    name: 
        form.name.length === 0 
        ? "This input must contain something" 
        : !regexName.test(form.name) 
        ? "The name can only contain letters" 
        : "",

    surname:
        form.surname.length === 0 
        ? "This input must contain something" 
        : !regexName.test(form.surname) 
        ? "The surname can only contain letters" 
        : "",
    
    email: 
        form.email.length === 0 
        ? "This input must contain something" 
        : !regexEmail.test(form.email) 
        ? "Must be a valid email address" 
        : "",
    
    password:
        form.password.length === 0 
        ? "This input must contain something" 
        : !regexPassword.test(form.password) 
        ? "At least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character is required" 
        : "",
    phoneNumber:
        form.phoneNumber.length === 0 
        ? "This input must contain something" 
        : !regexPhone.test(form.phoneNumber) 
        ? "Must be a valid phone number" 
        : "",
    country:
        form.country.length === 0 
        ? "This input must contain something" 
        : !regexName.test(form.country) 
        ? "The country can only contain letters" 
        : "",
    city:
        form.city.length === 0 
        ? "This input must contain something" 
        : !regexName.test(form.city) 
        ? "The city can only contain letters" 
        : "",
    
    }

    return errors;

}