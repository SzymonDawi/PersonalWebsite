'use client';

import { Card, Grid } from 'antd';

const { Meta } = Card;
const { useBreakpoint } = Grid;

interface Props {
    title: string;
    className: string;
}

const Pillar = (props: Props) => {
    const { sm } = useBreakpoint();
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