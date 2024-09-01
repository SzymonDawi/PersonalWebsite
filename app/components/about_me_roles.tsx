'use client';

import styles from "../styles/about_me_roles.module.css";
import AboutMeProjects from "../components/about_me_projects";

interface Props {
    roles: any[];
}

export default function AboutMeRoles(props: Props) {

    if (!props.roles) return

    return ( 
        <div className={styles.contentContainer}>
            {props.roles.map((role, index) => {
                return (
                    <div key={index}>
                        <h3 className={styles.jobTitle}>{role.job_title}</h3>
                        <p className={styles.jobWorkPeriod}>{role.work_period}</p>
                        {role.achievements.map((achievement: string, index: number) => {
                            return(
                                <div key={index}>
                                    <p>{achievement}</p>
                                </div>
                            )
                        })}
                        <AboutMeProjects projects={role.projects} />
                    </div>
                )
            })}
        </div>
    )
}