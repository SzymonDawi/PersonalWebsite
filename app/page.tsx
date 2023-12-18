'use client';

import {Col, Row} from 'antd';

import Pillar from "./_components/pillar";
import Greeting from "./_components/greeting";
import home_page_styles from "./_styles/home_page.module.css";
import { gql, useQuery, Provider } from 'urql';
import Loader from './_components/loader';

const TodosQuery = gql`
  query {
    home {
      greeting
      description
      links {
        label
        url
        icon_slug
      }
    }
  }
`;

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <Loader/>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Row className="main">
        <Col span={9}> 
          <Greeting data={data.home}></Greeting>
        </Col>
        <Col span={15}>  
          <Row className="fullRow">
            <Col span={8} className={home_page_styles.projectPillar}>
                <Pillar 
                    className={home_page_styles.projectPillar}                        
                    title="Projects"
                    >
                </Pillar>    
            </Col>

            <Col span={8} className={home_page_styles.artPillar}>
              <Pillar     
                  className={home_page_styles.artPillar}   
                  title="Art">
              </Pillar>    
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
