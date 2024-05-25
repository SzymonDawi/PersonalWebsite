'use client';

import Link from 'next/link';
import { Card } from 'antd';
import { Sideboard } from "../constants";

const { Meta } = Card;

interface Props {
    title: string;
    className: string;
    link: string;
    nav_button_height: string;
}

const Pillar = (props: Props) => {
    return(
        <Link href={props.link} style={{height: props.nav_button_height}}>
            <Card 
            className={props.className}
            bordered = {false}
            hoverable
            style={{paddingTop: "40vh", height: "100vh"}}
            >
                <Meta title={<span className={`${Sideboard.className} title`}>{props.title} </span> }/>
            </Card>
        </Link>
    )
}

export default Pillar;