'use client';

import Pillar from "./components/pillar";
import Greeting from "./components/greeting";
import home_page_styles from "./styles/home_page.module.css";

export default function Home() {
  return (
    <div className={home_page_styles.navContainer}>
      <Greeting/>
      <div className={`${home_page_styles.pillar} ${home_page_styles.projectPillar}`}>
        <Pillar 
            className={home_page_styles.projectPillar}
            title="PROJECTS"
            link="/projects"
            >
        </Pillar> 
      </div>
      <div className={`${home_page_styles.pillar} ${home_page_styles.artPillar}`}>
        <Pillar     
          className={home_page_styles.artPillar}   
          title="ART"
          link="/art"
          >
        </Pillar>    
      </div>
      <div className={`${home_page_styles.pillar} ${home_page_styles.aboutMePillar}`}>
        <Pillar                         
          className={home_page_styles.aboutMePillar}
          title="ABOUT ME"
          link="/about-me"
          >
        </Pillar>
        </div>
    </div>
  )
}
