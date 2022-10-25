import { useState, useEffect } from "react";
import validate from "./validateInfo";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErros] = useState({})
    const [isSubmitting, setIsSubmitting] = useState
    (false)


    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErros(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    })

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;