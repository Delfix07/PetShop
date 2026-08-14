import { useState } from "react";
import {Form} from "../../organisms/index.js";
import validateRegister from "../../utils/ValidateRegister.js";
import "./Register.css"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register (){
    const [form, setForm] = useState({
        name:"",
        surname:"",
        email:"",
        password:"",
        repeatPassword:"",
        phoneNumber:"",
        country:"",
        city:""
    })
    const [errors, setErrors] = useState({
        name:"",
        surname:"",
        email:"",
        password:"",
        repeatPassword:"",
        phoneNumber:"",
        country:"",
        city:""
    })
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    function handleChange(event){
        const {name, value} = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    async function handleSubmit(event){
        event.preventDefault()
        const newErrors = validateRegister(form)
        setErrors(newErrors)

        const hasErrors =
            newErrors.name !== "" ||
            newErrors.surname !== "" ||
            newErrors.email !== "" ||
            newErrors.password !== "" ||
            newErrors.repeatPassword !== "" ||
            newErrors.phoneNumber !== "" ||
            newErrors.country !== "" ||
            newErrors.city !== ""

        if (hasErrors){
            setMessage("There are errors in the form")
            return
        }   
        const { repeatPassword, ...userData } = form
        try {
            await axios.post("http://localhost:3000/user/register", userData)
            navigate("/")

        }catch (error){
            console.error(error)
            if(error.response){
                setMessage(error.response.data)
            }else{
                setMessage("Server connection failed")
            }

        }
    }
    const inputs = [
        {
            inputId: "name",
            label: "Name",
            type: "text",
            name: "name",
            placeholder: "Enter your name",
            value: form.name,
            onChange: handleChange,
            error: errors.name
        },
        {
            inputId: "surname",
            label: "Surname",
            type: "text",
            name: "surname",
            placeholder: "Enter your surname",
            value: form.surname,
            onChange: handleChange,
            error: errors.surname
        },

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
        },
            
        {
           inputId: "repeatPassword",
            label: "RepeatPassword",
            type: "password",
            name: "repeatPassword",
            placeholder: "Repeat your password",
            value: form.repeatPassword,
            onChange: handleChange,
            error: errors.repeatPassword 
        },

        {
            inputId: "phoneNumber",
            label: "PhoneNumber",
            type: "number",
            name: "phoneNumber",
            placeholder: "Enter your phone number",
            value: form.phoneNumber,
            onChange: handleChange,
            error: errors.phoneNumber
        },

        {
            inputId: "country",
            label: "Country",
            type: "text",
            name: "country",
            placeholder: "Enter your country",
            value: form.country,
            onChange: handleChange,
            error: errors.country
        },

        {
            inputId: "city",
            label: "City",
            type: "text",
            name: "city",
            placeholder: "Enter your city",
            value: form.city,
            onChange: handleChange,
            error: errors.city
        }
    ]
    return (
        <main className="authPage">
            <section className="authCard">
                <Form
                    formTitle="Create account"
                    inputs={inputs}
                    formSubmit={handleSubmit}
                    className="authForm"
                />
                {message && (
                    <p className="authMessage">{message}</p>
                )}
            </section>
        </main>
    )
}