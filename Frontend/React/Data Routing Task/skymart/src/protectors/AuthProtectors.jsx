import React, { useEffect } from 'react';
import { load } from '../lib/locaStorage';
import { Outlet, useNavigate } from 'react-router';
import { showErrorToast } from '../lib/toast';

const AuthProtectors = () => {

    const user = load("logUser");
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.name !== undefined) {
            showErrorToast("You are already Logged In");
            navigate("/");
        }
    }, [navigate, user])

    return <Outlet />;
}

export default AuthProtectors;
