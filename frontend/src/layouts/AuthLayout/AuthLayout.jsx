import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ToastContainer from '../../components/common/Toast/ToastContainer';
import styles from './AuthLayout.module.css';

const AuthLayout = () => {
    // Dummy toast state for demonstration
    const [toasts, setToasts] = useState([]);

    // Function to add a toast
    const addToast = (message, type = 'info', duration = 3000) => {
        const id = Date.now();
        setToasts(prevToasts => [...prevToasts, { id, message, type, duration }]);
    };

    // Function to remove a toast
    const removeToast = (id) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logo}>
                    Contract Management System
                </Link>
            </div>
            <div className={styles.formContainer}>
                <Outlet context={{ addToast }} />
            </div>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </div>
    );
};

export default AuthLayout;