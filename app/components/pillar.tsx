'use client';

import Link from 'next/link';
import { Sideboard } from "../constants";
import {
    Card,
    CardTitle,
} from "../components/ui/card"
import pillar_styles from "../styles/pillar.module.css";

interface Props {
    title: string;
    className: string;
    link: string;
    nav_button_height: string;
}

const Pillar = (props: Props) => {
    return(
        <Link href={props.link}>
            <Card className={pillar_styles.fullCard}>
                <CardTitle className={`${Sideboard.className} ${pillar_styles.title}`}>{props.title}</CardTitle>
            </Card>
        </Link>
    )
}

export default Pillar;