'use client';

import Link from 'next/link'

import {Col, Row, Grid} from 'antd';

import Pillar from "./components/pillar";
import Greeting from "./components/greeting";
import home_page_styles from "./styles/home_page.module.css";
import { backend_url } from './constants';

const { useBreakpoint } = Grid;

export default function Home() {
  const { sm } = useBreakpoint();

  const nav_col_width = sm ? 15: 24;
  const greeting_col_width = sm ? 9: 24;
  const button_col_with = sm ? 8: 24;
  const row_height = sm ? "50vh" : "100vh"
  const nav_classname = sm ? "fullRow" : "mobileNav";
  const nav_button_height = sm ? "100vh" : "100px";

  console.log(process.env.BACKEND_URL);

  return (
    <Row className="main">
        <Col span={greeting_col_width} style={{height: row_height}}> 
          <Greeting></Greeting>
        </Col>
        <Col span={nav_col_width} >  
          <Row align={"middle"} className={nav_classname}>
            <Col span={button_col_with} className={home_page_styles.projectPillar} style={{height: nav_button_height}} >
              <Link href="/projects" style={{height: nav_button_height}}>
                <Pillar 
                    className={home_page_styles.projectPillar}                        
                    title="Projects"
                    >
                </Pillar>    
              </Link>
            </Col>

            <Col span={button_col_with} className={home_page_styles.artPillar} style={{height: nav_button_height}} >
              <Link href="/art" style={{height: nav_button_height}}>
                <Pillar     
                    className={home_page_styles.artPillar}   
                    title="Art">
                </Pillar>    
              </Link>
            </Col>

            <Col span={button_col_with} className={home_page_styles.aboutMePillar} style={{height: nav_button_height}}>
              <Link href="/about-me">
                <Pillar                         
                    className={home_page_styles.aboutMePillar}
                    title="About Me">
                </Pillar>
              </Link>
            </Col>
          </Row>
        </Col>
    </Row>
  )
}
