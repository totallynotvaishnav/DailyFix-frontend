import React, { useEffect } from 'react';
import axios from 'axios';

import styles from './WritingsList.module.scss';
import Card from '../Card/Card';

const WritingsList = () => {
    const [writings, setWritings] = React.useState([]);

    useEffect(() => {
        axios
            .get(`https://dailyfix.herokuapp.com/feed/writings`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            })
            .then((res) => {
                console.log(res.data);
                setWritings(res.data.posts);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Your All Writings</h1>
            </header>
            <div className={styles.cardsContainer}>
                {writings.map((writing) => {
                    console.log(writing);
                    const date = new Date(writing.createdAt).toLocaleDateString();
                    const time = new Date(writing.createdAt).toLocaleTimeString();
                    return (
                        <Card
                            date={date}
                            time={time}
                            content={writing.content}
                            key={writing._id}
                            id={writing._id}
                            authorId={writing.authorId}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default WritingsList;
