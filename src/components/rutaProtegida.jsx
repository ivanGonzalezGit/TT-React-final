import React from "react";
import { Navigate } from "react-router-dom";

export default function RutaProtegida({isAuthenticated, children})
{
    if (!isAuthenticated)
    {
        return <Navigate to='/login' replace />
    }

    return children;
}