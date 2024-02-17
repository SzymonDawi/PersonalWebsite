'use client';

import { Card } from 'antd';
import useCustomBreakPoints from './custom_breakpoints';

const { Meta } = Card;

interface Props {
    title: string;
    className: string;
}

const Pillar = (props: Props) => {
    const { sm } = useCustomBreakPoints();
    const topPadding = sm ? "40vh" : "0vh";

    return(
        <Card 
        className={props.className}
        bordered = {false}
        hoverable
        style={{paddingTop: topPadding, height: "100vh"}}
        >
            <Meta title={<span className="title">{props.title} </span> }/>
        </Card>
    )
}

export default Pillar;