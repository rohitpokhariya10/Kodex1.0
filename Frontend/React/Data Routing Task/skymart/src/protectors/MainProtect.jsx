import React, { useEffect } from 'react';
import { load } from '../lib/locaStorage';
import { Outlet, useNavigate } from 'react-router';
import { showErrorToast } from '../lib/toast';
import { AuthProvider, userData } from '../context/AuthContext';
import { ProductsProvider } from '../context/ProductContext';

const MainProtect = () => {
    let user = load("logUser");
    let navigate = useNavigate();

    useEffect(() => {
        if (user.name == undefined) {
            showErrorToast("Please Login first");
            navigate("/login");
            return;
        }
    }, [])

    return <ProductsProvider>
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    </ProductsProvider>
}

export default MainProtect
