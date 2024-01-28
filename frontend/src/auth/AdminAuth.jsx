import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom';

const AdminAuth = ({ children }) => {

    const hasRun = useRef(false);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('admin')));

    useEffect(() => {
        if (currentUser === null && !hasRun.current) {
            enqueueSnackbar('Please Login First', { variant: 'error' });
            hasRun.current = true;
        } else if (currentUser !== null) {
            hasRun.current = false;
        }
    }, [currentUser])


    if (currentUser !== null) {
        return children;
    } else {
        return <Navigate to='/main/login' />
    }
}

export default AdminAuth