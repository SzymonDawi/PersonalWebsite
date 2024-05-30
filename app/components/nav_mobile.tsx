'use client';

import {Col, Row} from 'antd';
import home_page_styles from "../styles/home_page.module.css";
import Pillar from "./pillar";

const NavMobile = () => {
    console.log("mobile")
    return(
        <Row align={"middle"} style={{height: "100px"}} >
            <Col span={24} className={home_page_styles.projectPillar}>
              <Pillar 
                  className={home_page_styles.projectPillar}                        
                  title="PROJECTS"
                  link="/projects"
                  padding="0px"
                  >
              </Pillar>    
            </Col>

            <Col span={24} className={home_page_styles.artPillar}>
              <Pillar     
                  className={home_page_styles.artPillar}   
                  title="ART"
                  link="/art"
                  padding="0px"
                  >
              </Pillar>    
            </Col>

            <Col span={24} className={home_page_styles.aboutMePillar}>
              <Pillar                         
                className={home_page_styles.aboutMePillar}
                title="ABOUT ME"
                link="/about-me"
                padding="0px"
                >
              </Pillar>
            </Col>
        </Row>
    )
}

export default NavMobile;