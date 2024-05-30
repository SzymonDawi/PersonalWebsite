'use client';

import {Col, Row} from 'antd';
import home_page_styles from "../styles/home_page.module.css";
import Pillar from "./pillar";

const NavDesktop = () => {
    console.log("Desktop")
    return(
        <Row align={"middle"} style={{height: "100vh"}}>
            <Col span={8} className={home_page_styles.projectPillar} style={{height: "100vh"}} >
              <Pillar 
                  className={home_page_styles.projectPillar}                        
                  title="PROJECTS"
                  link="/projects"
                  padding="40vh"
                  >
              </Pillar>    
            </Col>

            <Col span={8} className={home_page_styles.artPillar} style={{height: "100vh"}} >
              <Pillar     
                  className={home_page_styles.artPillar}   
                  title="ART"
                  link="/art"
                  padding="40vh"
                  >
              </Pillar>    
            </Col>

            <Col span={8} className={home_page_styles.aboutMePillar} style={{height: "100vh"}}>
              <Pillar                         
                className={home_page_styles.aboutMePillar}
                title="ABOUT ME"
                link="/about-me"
                padding="40vh"
                >
              </Pillar>
            </Col>
        </Row>
    )
}

export default NavDesktop;