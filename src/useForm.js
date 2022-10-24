import { useState, useEffect } from "react";
import validate from "./validateInfo";

const useForm = validate => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErros] = useState({})


    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErros(validate(values));
    };

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;