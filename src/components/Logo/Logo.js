import React from 'react';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.logo}>DailyFix</h1>
        </div>
    );
};

export default Logo;
