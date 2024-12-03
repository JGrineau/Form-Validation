import React, { useEffect } from 'react';
import './Form.css';

const AccountSuccess = ({ navigateTo }) => {
    // Automatically redirect to login after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigateTo('login');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigateTo]);

    return (
        <div className="form-content-right success-page">
            <div className="form success-content">
                <div className="success-icon">✓</div>
                <h1>Account Created Successfully!</h1>
                <p className="success-message">
                    Thank you for joining us! Your account has been created and you can now log in using your credentials.
                </p>
                <div className="success-info">
                    <p>You will be automatically redirected to the login page in 5 seconds...</p>
                </div>
                <button 
                    className="form-input-btn"
                    onClick={() => navigateTo('login')}
                >
                    Login Now
                </button>
            </div>
        </div>
    );
};

export default AccountSuccess;
