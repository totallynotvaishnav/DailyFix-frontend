import React from 'react';
import styles from './WritePad.module.scss';
import { MdOutlineDone } from 'react-icons/md';

const WritePad = () => {
    return (
        <div className={styles.container}>
            <div className={styles.writeArea} contentEditable placeholder='How have you been?'>
                afskfjasfljeflw
            </div>
            <div className={styles.submit}>
                <button className={styles.btn}>Done</button>
            </div>
        </div>
    );
};

export default WritePad;
