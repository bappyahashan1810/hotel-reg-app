import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div><span className="loading loading-dots loading-lg"></span><span className="loading loading-dots loading-lg"></span><span className="loading loading-dots loading-lg"></span></div>
    }

    if (user && user.uid) {
        return children;

    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivateRoutes;