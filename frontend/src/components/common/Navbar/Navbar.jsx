import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const navItems = [
        { path: '/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/dashboard/accounts', label: 'Accounts', icon: '👤' },
        { path: '/dashboard/customers', label: 'Customers', icon: '🏢' },
        { path: '/dashboard/projects', label: 'Projects', icon: '📁' },
        { path: '/dashboard/contracts', label: 'Contracts', icon: '📄' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                        }
                        end={item.path === '/dashboard'}
                    >
                        <span className={styles.icon}>{item.icon}</span>
                        <span className={styles.label}>{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;