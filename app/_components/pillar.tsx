'use client';

import { Card } from 'antd';

import styles from "../_styles/pillar.module.css";

const { Meta } = Card;

interface Props {
    title: string;
    className: string;
}

const Pillar = (props: Props) => {

    return(
        <Card 
        className={props.className}
        bordered = {false}
        hoverable
        >
            <Meta title={<span className="title">{props.title} </span> }/>
        </Card>
    )
}

export default Pillar;