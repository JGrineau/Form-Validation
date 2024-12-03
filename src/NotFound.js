import React from 'react';
import './Form.css';

const NotFound = ({ navigateTo }) => {
    return (
        <div className="form-content-right not-found">
            <div className="form not-found-content">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-subtitle">Oops! Page Not Found</p>
                <p className="not-found-text">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <button 
                    className="form-input-btn"
                    onClick={() => navigateTo('login')}
                >
                    Go to Login
                </button>
                <span className="form-input-login">
                    or <a href="/signup" className="form-link" onClick={(e) => {
                        e.preventDefault();
                        navigateTo('signup');
                    }}>Create an Account</a>
                </span>
            </div>
        </div>
    );
};

export default NotFound;
