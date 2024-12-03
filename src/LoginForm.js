import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const LoginForm = ({ submitForm, navigateTo }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate, true);

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Welcome Back!</h1>
                <p className='form-subtitle'>Please login to your account</p>
                
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input
                        id='email'
                        type="email"
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
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
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
                
                <div className='form-checkbox'>
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                    />
                    <label htmlFor="remember">Remember me</label>
                    <a href="/forgot-password" className='forgot-password' onClick={(e) => {
                        e.preventDefault();
                        navigateTo('forgot-password');
                    }}>Forgot Password?</a>
                </div>

                <button className='form-input-btn' type='submit'>
                    Login
                </button>
                
                <span className='form-input-login'>
                    Don't have an account? <a href="/signup" className='form-link' onClick={(e) => {
                        e.preventDefault();
                        navigateTo('signup');
                    }}>Sign up here</a>
                </span>
            </form>
        </div>
    );
};

export default LoginForm;
