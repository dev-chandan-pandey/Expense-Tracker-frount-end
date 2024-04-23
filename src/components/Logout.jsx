import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../reducers/authReducer/authreducer';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/login'); // Redirect to login page on logout
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
