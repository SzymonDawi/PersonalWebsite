'use client';

import { Sideboard } from "../constants";
import title_styles from "../styles/title.module.css";

interface Props {
    componentCat: string;
    backUrl: string;
    title: string;
}

const Title = (props: Props) => {

    return(
        <div className={`${props.componentCat} ${title_styles.titleContainer}`}>
            <a className={title_styles.BackButtonLink} href={props.backUrl}>
                <div className={`${Sideboard.className} ${title_styles.backButton}`}>Back</div>
            </a>
            <div className={`${Sideboard.className} ${title_styles.title}`}>{props.title}</div>
        </div>
    )
}

export default Title;