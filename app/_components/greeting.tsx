'use client';

import { Col, Row, Card, Avatar, Space} from 'antd';
import {GithubOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import styles from "../_styles/greeting.module.css";

const Greeting = () => {
    return(
        <Row>
            <Col>
                <Card 
                    className = {styles.greeting}
                    style={{height: "100vh", paddingTop: "20vh"}}
                    bordered = {false}
                    hoverable = {false}>
                    <Avatar size={256} src="/Img/IMG_0939.JPG"></Avatar>
                    <p className={styles.greetingTitle}>Hello!</p>  
                    <Row justify="center" style={{marginTop: "-70px"}}>
                        <Col lg={{span: 18}} md={{span: 12}} xs={{span: 0}}>
                            <p className="P-Lato" >
                                My name is Szymon Budzyna-Dawidowksi. I am 25 year old software and hardware engineer. 
                                I graduated in computer systems engineering from the university of auckland in 2022.
                                This is a website I built to showcase my engineering projects and my art. 
                                The engineering projects section of my website is going to be updated in the near future. 
                            </p>
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
                            href="https://www.instagram.com/drawidowski/">
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