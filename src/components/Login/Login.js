import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { required, length, email } from '../../utils/validators';
import styles from './Login.module.scss';
import AuthContext from '../../auth-context';

const Login = () => {
    const context = useContext(AuthContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputElems = [emailRef, passwordRef];
        let isValid = true;
        for (const elem in inputElems) {
            isValid = isValid && required(inputElems[elem].current.value);
        }

        isValid = isValid && length(passwordRef.current.value, { min: 6, max: 25 });
        isValid = isValid && email(emailRef.current.value);

        if (isValid) {
            axios
                .post('http://localhost:8080/auth/login', {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                })
                .then((res) => {
                    console.log(res.data);
                    context.setIsAuth(true);
                    context.setUserId(res.data.id);
                    context.setName(res.data.name);
                    localStorage.setItem('token', res.data.token);
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err);
                    alert('Invalid credentials');
                });
        }
    };
    return (
        <div className={styles.container}>
            <header className={styles.header}>Login</header>
            <form className={styles.form}>
                <input className={styles.input} type='email' placeholder='Email' ref={emailRef} />
                <input
                    className={styles.input}
                    type='password'
                    placeholder='Password'
                    ref={passwordRef}
                />
            </form>
            <div className={styles.buttonContainer}>
                <button className={styles.btn} onClick={onSubmitHandler}>
                    Login
                </button>
            </div>
            <footer>
                Not a member?&nbsp;<Link to='/sign-up'>SignUp</Link>
            </footer>
        </div>
    );
};

export default Login;
