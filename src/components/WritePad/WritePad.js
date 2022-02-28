import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './WritePad.module.scss';

const WritePad = () => {
    const textRef = useRef(null);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const content = textRef.current.textContent;
        axios
            .post(
                'http://localhost:8080/feed/write',
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
            <div
                className={styles.writeArea}
                contentEditable
                placeholder='How have you been?'
                ref={textRef}
            ></div>
            <div className={styles.submit}>
                <button className={styles.btn} onClick={onSubmitHandler}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default WritePad;
