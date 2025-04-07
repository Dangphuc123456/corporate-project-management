import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout/MainLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';

// Pages
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import AccountsPage from '../pages/AccountsPage/AccountsPage';
import AccountDetailsPage from '../pages/AccountDetailsPage/AccountDetailsPage';
import CustomersPage from '../pages/CustomersPage/CustomersPage';
import CustomerDetailsPage from '../pages/CustomerDetailsPage/CustomerDetailsPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage/ProjectDetailsPage';
import ContractsPage from '../pages/ContractsPage/ContractsPage';
import ContractDetailsPage from '../pages/ContractDetailsPage/ContractDetailsPage';

// Context
import { useAuth } from '../hooks/useAuth';

const AppRouter = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>

            {/* Auth routes */}
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>

            {/* Protected routes */}
            <Route
                path="dashboard"
                element={
                    isAuthenticated ? <MainLayout /> : <Navigate to="/auth/login" />
                }
            >
                <Route index element={<DashboardPage />} />
                <Route path="accounts" element={<AccountsPage />} />
                <Route path="accounts/:id" element={<AccountDetailsPage />} />
                <Route path="customers" element={<CustomersPage />} />
                <Route path="customers/:id" element={<CustomerDetailsPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:id" element={<ProjectDetailsPage />} />
                <Route path="contracts" element={<ContractsPage />} />
                <Route path="contracts/:id" element={<ContractDetailsPage />} />
            </Route>

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;