import React from 'react';
import styles from './Card.module.scss';
import { IoCloseSharp } from 'react-icons/io5';

const Card = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}>
                <div className={styles.dateTime}>
                    <span className={styles.date}>{props.date}</span>
                    <span className={styles.time}>{props.time}</span>
                </div>
                <div className={styles.close}>
                    <IoCloseSharp className={styles.icon} />
                </div>
            </div>
            <div className={styles.content}>
                <p>{props.content}</p>
            </div>
        </div>
    );
};

export default Card;
