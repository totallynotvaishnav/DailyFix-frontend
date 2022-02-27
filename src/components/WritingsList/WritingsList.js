import React from 'react';
import styles from './WritingsList.module.scss';

import Card from '../Card/Card';

const WritingsList = () => {
    const content =
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam ea numquam praesentium fuga aut dignissimos asperiores odit iste obcaecati!';
    const content2 =
        'ipsum dolor sit amet consectetur adipisicing elit. Laudantium quo provident officiis soluta repudiandae illum ipsum quasi sunt harum temporibus dignissimos laborum repellat veritatis voluptatibus, minus, nesciunt deserunt earum sequi inventore, nobis porro pariatur? Voluptates maiores, enim repellendus velit repellat id fugit quibusdam aut ipsam eligendi reprehenderit aliquam magnam iure minima quasi ratione soluta est assumenda voluptate. Neque, cum magni.';
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Your All Writings</h1>
            </header>
            <div className={styles.cardsContainer}>
                <Card date='24/04/2022' time='11:43 PM' content={content} />
                <Card date='04/02/2012' time='1:43 PM' content={content} />
                <Card date='04/02/2012' time='1:43 PM' content={content} />
                <Card date='04/02/2012' time='1:43 PM' content={content2} />
            </div>
        </div>
    );
};

export default WritingsList;
