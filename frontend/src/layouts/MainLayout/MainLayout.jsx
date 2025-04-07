import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import Navbar from '../../components/common/Navbar/Navbar';
import ToastContainer from '../../components/common/Toast/ToastContainer';
import styles from './MainLayout.module.css';

const MainLayout = () => {
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
        <div className={styles.layoutContainer}>
            <Header />
            <Navbar />
            <main className={styles.mainContent}>
                <Outlet context={{ addToast }} />
            </main>
            <Footer />
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </div>
    );
};

export default MainLayout;