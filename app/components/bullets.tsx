'use client';

import styles from '../styles/bullets.module.css';

interface Props {
    title: string | undefined;
    items: string[] | undefined;
}

const Bullets = (props: Props) => {
    if (props.title === undefined || props.items === undefined) {
        return <div/>
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <ul className={styles.bullets}>
                {props.items.map((bullet) => {
                    return(<li key={bullet}>{bullet}</li>)
                })}
            </ul>
        </div>
    )
}

export default Bullets;