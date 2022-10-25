import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'



const Form = () => {
    const [issubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
  return (
    <>
    <div className='form-container'>
        <span className='close-btn'></span>
        <div className='form-content-left'>
            <img src='images/logo_red.png' alt='spaceship' className='form-img' />
        </div>
        {!issubmitted ? (<FormSignup submitForm=
        {submitForm} />) : <FormSuccess />}
       </div> 
       
        
        </>
  );
};

export default Form