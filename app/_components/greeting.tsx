'use client';

import { Col, Row, Card, Avatar, Space} from 'antd';
import {GithubOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import styles from "../_styles/greeting.module.css";

interface Data {
    data: {
        greeting: string;
        description: string;
        links: [{icon_slug: string; label: string; url: string;}]
    }
}

const Greeting = ({ data }: Data) => {
    return(
        <Row>
            <Col span={24}>
                <Card 
                    className = {styles.greeting}
                    style={{height: "100vh", paddingTop: "20vh"}}
                    bordered = {false}
                    hoverable = {false}>
                    <Avatar size={256} src="/Img/IMG_0939.JPG"></Avatar>
                    <p className={styles.greetingTitle}>{data.greeting}</p>  
                    <Row justify="center" style={{marginTop: "-70px"}}>
                        <Col lg={{span: 18}} md={{span: 12}} xs={{span: 0}}>
                            <p className="P-Lato" >{data.description}</p>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Space>
                            <a className={styles.greetingLink} 
                            href="https://github.com/SzymonDawi">
                                <GithubOutlined style={{fontSize: "25px"}}/>
                            </a>
                            <a className={styles.greetingLink} 
                            href="https://www.linkedin.com/in/szymon-dawidowski/">
                                <LinkedinOutlined style={{fontSize: "25px"}}/>
                            </a>
                            <a className={styles.greetingLink} 
                            href="https://www.instagram.com/szyart_/">
                                <InstagramOutlined style={{fontSize: "25px"}}/>
                            </a>
                        </Space>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default Greeting;