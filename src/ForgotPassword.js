import React, { useState } from 'react';
import './Form.css';

const ForgotPassword = ({ navigateTo }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Here you would typically make an API call to send the reset link
        // For now, we'll just show a success message
        setSuccess(true);
        setTimeout(() => {
            navigateTo('login');
        }, 3000); // Redirect to login after 3 seconds
    };

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Reset Password</h1>
                <p className="form-subtitle">
                    Enter your email address and we'll send you a link to reset your password
                </p>
                
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                        }}
                    />
                    {error && <p className="error-text">{error}</p>}
                    {success && (
                        <p className="success-text">
                            Password reset link has been sent to your email address.
                            Redirecting to login page...
                        </p>
                    )}
                </div>

                <button 
                    className="form-input-btn" 
                    type="submit"
                    disabled={success}
                >
                    Send Reset Link
                </button>

                <span className="form-input-login">
                    Remember your password? <a href="/login" className="form-link" onClick={(e) => {
                        e.preventDefault();
                        navigateTo('login');
                    }}>Back to Login</a>
                </span>
            </form>
        </div>
    );
};

export default ForgotPassword;
