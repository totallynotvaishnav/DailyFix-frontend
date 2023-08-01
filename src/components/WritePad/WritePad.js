import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './WritePad.module.scss';

const WritePad = () => {
    const textRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        textRef.current.focus();
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const content = textRef.current.value;
        axios
            .post(
                'https://dailyfix.up.railway.app/feed/write',
                { content },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                }
            )
            .then((res) => {
                console.log('successfully added new entry!');
                navigate('/');
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className={styles.container}>
            <textarea
                className={styles.writeArea}
                placeholder='How have you been?'
                ref={textRef}
            ></textarea>

            <div className={styles.submit}>
                <button className={styles.btn} onClick={onSubmitHandler}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default WritePad;
