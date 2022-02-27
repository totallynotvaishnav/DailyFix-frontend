import React from 'react';
import styles from './styles/Dashboard.module.scss';

import NavBar from '../components/NavBar/NavBar';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <NavBar />
        </div>
    );
};

export default Dashboard;
