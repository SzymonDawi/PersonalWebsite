'use client';

import { Col, Row, Card, Avatar, Space} from 'antd';
import {GithubOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';
import styles from "../styles/greeting.module.css";
import {  IconType, useHomeQuery } from '../types/generated';
import Loader from '../components/loader';
import { Sideboard } from "../constants";
import GraphqlError from './graphql_error';

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
  
    if (error) return(<GraphqlError/>);

    return(
        <Row>
            <Col span={24}>
                <Card 
                    className = {styles.greeting}
                    style={{height: "100vh", paddingTop: "20vh"}}
                    bordered = {false}
                    hoverable = {false}>
                    { fetching && <Loader/>}
                    <Avatar style={{height: "auto", width: "40%"}} src={data?.home.image.rendition.url}></Avatar>
                    <p className={`${Sideboard.className} title`} style={{marginTop: "-0.5vw"}}>{data?.home.greeting}</p>  
                    <Row justify="center" style={{marginTop: "-30px"}}>
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