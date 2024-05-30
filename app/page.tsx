'use client';

import {Col, Row} from 'antd';

import Greeting from "./components/greeting";
import NavDesktop from './components/nav_desktop';
import NavMobile from './components/nav_mobile';
import useCustomBreakPoints from './components/custom_breakpoints';


export default function Home() {
  const { md } = useCustomBreakPoints();

  const use_desktop_nav = md 
  const greeting_col_width = md ? 9: 24;

  return (
    <Row className="main">
        <Col span={greeting_col_width}> 
          <Greeting />
        </Col>
        {/* Desktop Nav*/}
        { use_desktop_nav &&
          <Col span={15}>  
            <NavDesktop />
          </Col>
        }
        {/* Mobile Nav */}
        { !use_desktop_nav &&
          <Col span={24}>  
            <NavMobile />
          </Col>
        }
    </Row>
  )
}
