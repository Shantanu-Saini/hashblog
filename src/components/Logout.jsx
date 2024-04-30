import React from 'react'
import authService from '../appwrite/auth.user';
import { logout } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const Logout = () => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logOut().then(() => {
            useDispatch(logout());
        }
        )
    }

    return (
        <button className='inline-block px-6 py-2 duration-300 hover:bg-blue-100 rounded-full'>Logout</button>
    )
}

export default Logout