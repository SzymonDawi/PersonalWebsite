'use client';

import { Col, Row, Card, Avatar, Space} from 'antd';
import {GithubOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import styles from "../_styles/greeting.module.css";
import {  IconType, useHomeQuery } from '../_types/generated';
import Loader from '../_components/loader';

function getLinkIconComponent(iconType: IconType) {
    if (iconType === IconType.Github){
        return(<GithubOutlined style={{fontSize: "25px"}}/>)   
    } else if (iconType === IconType.Instagram){
        return(<InstagramOutlined style={{fontSize: "25px"}}/>)   
    } else if (iconType === IconType.Linkedin){
        return(<LinkedinOutlined style={{fontSize: "25px"}}/>)   
    }
}

const Greeting = () => {
    const [{ data, fetching, error }] = useHomeQuery();
  
    if (error) return <p>Oh no... {error.message}</p>;

    return(
        <Row>
            <Col span={24}>
                <Card 
                    className = {styles.greeting}
                    style={{height: "100vh", paddingTop: "20vh"}}
                    bordered = {false}
                    hoverable = {false}>
                    { fetching && <Loader/>}
                    <Avatar size={256} src={data?.home.image.rendition.url}></Avatar>
                    <p className={styles.greetingTitle} style={{marginTop: "-5px"}}>{data?.home.greeting}</p>  
                    <Row justify="center" style={{marginTop: "-70px"}}>
                        <Col lg={{span: 18}} md={{span: 12}} xs={{span: 0}}>
                            <p className="P-Lato" >{data?.home.description}</p>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Space>
                            {data?.home.links.map(link => {
                                return(
                                    <a key={link.label} className={styles.greetingLink} 
                                    href={link.url} 
                                    target="_blank">
                                        {getLinkIconComponent(link.icon_slug)}
                                    </a>
                                )
                            })}
                        </Space>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default Greeting;