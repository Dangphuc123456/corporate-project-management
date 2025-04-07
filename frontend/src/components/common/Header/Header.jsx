import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import styles from './Header.module.css';
import Button from '../Button/Button';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">Contract Management System</Link>
            </div>
            <div className={styles.actions}>
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard" className={styles.dashboardLink}>
                            Dashboard
                        </Link>
                        <Button
                            variant="outlined"
                            onClick={logout}
                            className={styles.logoutBtn}
                        >
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Link to="/auth/login" className={styles.loginLink}>
                            Login
                        </Link>
                        <Link to="/auth/register">
                            <Button variant="contained" className={styles.registerBtn}>
                                Register
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;