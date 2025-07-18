import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';

export default function RutaProtegida({isAuthenticated, children})
{
    const { user } = useAuthContext();
    if (!user)
    {
        return <Navigate to='/login' replace />
    }

    return children;
}