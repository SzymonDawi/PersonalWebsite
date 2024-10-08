'use client';

import styles from "../styles/about_me_roles.module.css";
import AboutMeProjects from "../components/about_me_projects";
import {AboutMeQuery } from '../types/generated';

type Role = NonNullable<AboutMeQuery['about_me']>['jobs'][number]['roles'][number];

interface Props {
    roles: Role[];
}

export default function AboutMeRoles(props: Props) {

    if (!props.roles) return

    return (
        <div className={styles.contentContainer}>
            {props.roles.map((role, index) => {
                return (
                    <div key={index} className={styles.jobContainer}>
                        <div className={styles.jobDescription}>
                            <h3 className={styles.jobTitle}>{role.job_title}</h3>
                            <p className={styles.jobWorkPeriod}>{role.work_period}</p>
                            <ul className={styles.jobAchievementList}>
                                {role.achievements.map((achievement: string, index: number) => {
                                    return(
                                        <li key={index}>
                                            <p className={styles.jobAchievement}>{achievement}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <AboutMeProjects projects={role.projects} />
                    </div>
                )
            })}
        </div>
    )
}