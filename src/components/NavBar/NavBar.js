import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';
import Logo from '../Logo/Logo';
import AuthContext from '../../auth-context';

const NavBar = () => {
    const context = useContext(AuthContext);

    const onLogOutHandler = () => {
        context.setIsAuth(false);
        context.setUserId(null);
        context.setName(null);

        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
    };

    return (
        <div className={styles.container}>
            <div className={styles.LogoContainer}>
                <Logo />
            </div>
            <div className={styles.navigation}>
                <NavLink to='/' className={styles.navigationItem}>
                    Home
                </NavLink>
                <NavLink to='/write' className={styles.navigationItem}>
                    Write
                </NavLink>
                <NavLink to='/login' className={styles.navigationItem} onClick={onLogOutHandler}>
                    Logout
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
