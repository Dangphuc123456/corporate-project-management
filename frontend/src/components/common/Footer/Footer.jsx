import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Contract Management System</h3>
                    <p>Streamline your contract management process with our comprehensive solution.</p>
                </div>
                <div className={styles.section}>
                    <h4>Quick Links</h4>
                    <ul className={styles.links}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/dashboard/contracts">Contracts</a></li>
                        <li><a href="/dashboard/projects">Projects</a></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4>Contact</h4>
                    <ul className={styles.links}>
                        <li>Email: support@cms.com</li>
                        <li>Phone: +1 (123) 456-7890</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© {currentYear} Contract Management System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;