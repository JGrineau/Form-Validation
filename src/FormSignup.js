import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = ({submitForm, navigateTo}) => {
    const {handleChange, values, handleSubmit, errors} 
    = useForm(
        submitForm,
        validate 
    );

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Get Started With Us Today! Create your account by filling in the information needed below.</h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                       Username
                    </label>
                    <input 
                        id='username'
                        type="text" 
                        name='username' 
                        className='form-input'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error-text">{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                       Email
                    </label>
                    <input 
                        id='email'
                        type="email" 
                        name='email' 
                        className='form-input'
                        placeholder='Enter your Email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                       Password
                    </label>
                    <input 
                        id='password'
                        type="password" 
                        name='password' 
                        className='form-input'
                        placeholder='Enter your Password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>
                       Confirm Password
                    </label>
                    <input 
                        id='password2'
                        type="password" 
                        name='password2' 
                        className='form-input'
                        placeholder='Enter your Password again'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p className="error-text">{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign up
                </button>
                <span className='form-input-login'>
                    Already have an account? <a href="/login" className='form-link' onClick={(e) => {
                        e.preventDefault();
                        navigateTo('login');
                    }}>Login here</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignup