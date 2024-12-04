import React, { useState, useEffect, useCallback } from 'react';
import FormSignup from './FormSignup';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';
import NotFound from './NotFound';
import AccountSuccess from './AccountSuccess';
import './Form.css';

const Form = () => {
    const [currentPage, setCurrentPage] = useState('signup');

    // Valid routes
    const validRoutes = ['login', 'signup', 'forgot-password', 'success', ''];

    const navigateTo = useCallback((page) => {
        setCurrentPage(page);
        // Update URL without page reload
        window.history.pushState({}, '', page === '' ? '/' : `/${page}`);
    }, [setCurrentPage]);

    function submitForm() {
        navigateTo('success');
    }

    // Handle browser back/forward buttons
    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname.substring(1);
            if (validRoutes.includes(path)) {
                navigateTo(path);
            } else {
                setCurrentPage('404');
                window.history.pushState({}, '', window.location.pathname);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [navigateTo, validRoutes]);

    // Initial route handling
    useEffect(() => {
        const path = window.location.pathname.substring(1);
        if (validRoutes.includes(path)) {
            navigateTo(path);
        } else {
            setCurrentPage('404');
        }
    }, [navigateTo, validRoutes]);

    const renderContent = () => {
        switch (currentPage) {
            case 'login':
                return <LoginForm submitForm={submitForm} navigateTo={navigateTo} />;
            case 'signup':
                return <FormSignup submitForm={submitForm} navigateTo={navigateTo} />;
            case 'forgot-password':
                return <ForgotPassword navigateTo={navigateTo} />;
            case 'success':
                return <AccountSuccess navigateTo={navigateTo} />;
            case '404':
                return <NotFound navigateTo={navigateTo} />;
            default:
                return <FormSignup submitForm={submitForm} navigateTo={navigateTo} />;
        }
    };

    return (
        <>
            <div className='form-container'>
                <span className='close-btn'></span>
                <div className='form-content-left'>
                    <img src='images/logo_red.png' alt='spaceship' className='form-img' />
                </div>
                {renderContent()}
            </div>
        </>
    );
};

export default Form;