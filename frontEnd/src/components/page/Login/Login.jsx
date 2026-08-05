import { useState } from "react";
import Form from "../../organisms/Form";
import validateLogin from "../../utils/ValidateLogin.js"
import axios from "axios";
import { useDispatch } from "react-redux";
import {loginSuccess, logout} from "../../../redux/slices/userSlice.js"

export default function Login(){
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email:"",
        password:"",
    })
    const [message, setMessage] = useState("")

    function handleChange(event){
        const {name, value} = event.target;
        setForm({
            ...form,
            [name]: value
        })
    }

        async function handleSubmit(event){
        event.preventDefault()
        const newErrors = validateLogin(form);
        setErrors(newErrors);

        const hasErrors =
            newErrors.email !== "" ||
            newErrors.password !== ""

        if (hasErrors){
            setMessage("There are errors in the form")
            return
        }   
        try {
            const response = await axios.post("http://localhost:3000/login", form)
            dispatch(loginSuccess(response.data.user));
            
            setMessage("Logged correctly")
            
            setForm({
                email:"",
                password:"",
            })
            setErrors({
                email:"",
                password:""
            })
        }catch (error){
            console.error(error)
            if(error.response){
                setMessage(error.response.data);
            }else{
                setMessage("Server connection failed");
            }

        }
    }

    const inputs = [
        {
            inputId: "email",
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "Enter your email",
            value: form.email,
            onChange: handleChange,
            error: errors.email
        },

        {
            inputId: "password",
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "Enter your password",
            value: form.password,
            onChange: handleChange,
            error: errors.password
        }
    ]

    return (
            <>
                <Form 
                    formTitle="Login"
                    inputs={inputs}
                    formSubmit={handleSubmit}
                />
                {message && <p>{message}</p>}
            </>
        )
}