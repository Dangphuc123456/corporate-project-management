import React from 'react';
import Toast from './Toast';
import styles from './Toast.module.css';

const ToastContainer = ({ toasts, removeToast }) => {
    return (
        <div className={styles.toastContainer}>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                    duration={toast.duration}
                />
            ))}
        </div>
    );
};

export default ToastContainer;