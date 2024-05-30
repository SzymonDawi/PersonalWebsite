'use client';

import Link from 'next/link';
import { Card } from 'antd';
import { Sideboard } from "../constants";

const { Meta } = Card;

interface Props {
    title: string;
    className: string;
    link: string;
    padding: string;
}

const Pillar = (props: Props) => {
    return(
        <Link href={props.link} >
            <Card 
            className={props.className}
            bordered = {false}
            hoverable
            style={{paddingTop: props.padding, height: "100%"}}
            >
                <Meta title={<span className={`${Sideboard.className} title`}>{props.title} </span> }/>
            </Card>
        </Link>
    )
}

export default Pillar;