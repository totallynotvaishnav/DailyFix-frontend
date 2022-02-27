import React from 'react';
import styles from './NavBar.module.scss';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
                <NavLink to='/logout' className={styles.navigationItem}>
                    Logout
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
