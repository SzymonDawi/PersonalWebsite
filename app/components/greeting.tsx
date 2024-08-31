'use client';

import styles from "../styles/greeting.module.css";
import {  IconType, useHomeQuery } from '../types/generated';
import Loader from '../components/loader';
import { Sideboard } from "../constants";
import GraphqlError from './graphql_error';
import {
    Card,
    CardTitle,
    CardImage,
} from "../components/ui/card"

function getLinkIconComponent(iconType: IconType) {
    if (iconType === IconType.Github){
        return(<div className={`${styles.icon} ${styles.github}`}></div>)   
    } else if (iconType === IconType.Instagram){
        return(<div className={`${styles.icon} ${styles.instagram}`}></div>)   
    } else if (iconType === IconType.Linkedin){
        return(<div className={`${styles.icon} ${styles.linkedIn}`}></div>)   
    }
}

const Greeting = () => {
    const [{ data, fetching, error }] = useHomeQuery();
  
    if (error) return(<GraphqlError/>);
    if (fetching) return(<Loader/>);

    return(
        <div className={styles.imageContainer}>
            <Card>
                <CardImage className={styles.image} src={`http://localhost:8000${data?.home.image.rendition.url}`}/>
                <CardTitle className={`${Sideboard.className} ${styles.title}`}>{data?.home.greeting}</CardTitle>
                <div className={styles.description}>{data?.home.description}</div>
                <div className={styles.iconContainer}>
                {data?.home.links.map(link => {
                    return(
                        <a key={link.label} className={styles.greetingLink} 
                        href={link.url} 
                        target="_blank">
                            {getLinkIconComponent(link.icon_slug)}
                        </a>
                    )
                })}
                </div>
            </Card>
        </div>
    )
}

export default Greeting;