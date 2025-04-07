import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>Contract Management System</h1>
                <p className={styles.subtitle}>
                    Streamline your contract management process with our comprehensive solution
                </p>
                <div className={styles.actions}>
                    <Link to="/auth/register">
                        <Button variant="contained" size="large">
                            Get Started
                        </Button>
                    </Link>
                    <Link to="/auth/login">
                        <Button variant="outlined" size="large">
                            Login
                        </Button>
                    </Link>
                </div>
            </section>

            <section className={styles.features}>
                <h2>Key Features</h2>
                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📄</div>
                        <h3>Contract Creation & Management</h3>
                        <p>Create, store, and manage all your contracts in one place</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>👤</div>
                        <h3>Account Management</h3>
                        <p>Manage customer accounts with ease and track their status</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📁</div>
                        <h3>Project Management</h3>
                        <p>Create projects, assign accounts, and track project status</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🔍</div>
                        <h3>Advanced Search & Filters</h3>
                        <p>Find what you need quickly with powerful search capabilities</p>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <h2>Ready to optimize your contract management?</h2>
                <p>Join thousands of businesses that trust our platform</p>
                <Link to="/auth/register">
                    <Button variant="contained" color="success" size="large">
                        Sign Up Now
                    </Button>
                </Link>
            </section>
        </div>
    );
};

export default HomePage;