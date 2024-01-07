'use client';

import Link from 'next/link'

import {Col, Row} from 'antd';

import Pillar from "./components/pillar";
import Greeting from "./components/greeting";
import home_page_styles from "./styles/home_page.module.css";

export default function Home() {
  return (
    <Row className="main">
        <Col span={9}> 
          <Greeting></Greeting>
        </Col>
        <Col span={15}>  
          <Row className="fullRow">
            <Col span={8} className={home_page_styles.projectPillar}>
              <Link href="/projects">
                <Pillar 
                    className={home_page_styles.projectPillar}                        
                    title="Projects"
                    >
                </Pillar>    
              </Link>
            </Col>

            <Col span={8} className={home_page_styles.artPillar}>
              <Link href="/art">
                <Pillar     
                    className={home_page_styles.artPillar}   
                    title="Art">
                </Pillar>    
              </Link>
            </Col>

            <Col span={8} className={home_page_styles.aboutMePillar}>
              <Pillar                         
                  className={home_page_styles.aboutMePillar}
                  title="WIP">
              </Pillar>
            </Col>
          </Row>
        </Col>
    </Row>
  )
}
