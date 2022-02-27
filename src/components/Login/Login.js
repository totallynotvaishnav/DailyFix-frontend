import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>Login</header>
            <form className={styles.form}>
                <input className={styles.input} type='text' placeholder='Email' />
                <input className={styles.input} type='password' placeholder='Password' />
            </form>
            <div className={styles.buttonContainer}>
                <button className={styles.btn}>Login</button>
            </div>
            <footer>
                Not a member?<Link to='/sign-up'>SignUp</Link>
            </footer>
        </div>
    );
};

export default Login;
