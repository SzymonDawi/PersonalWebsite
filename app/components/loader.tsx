'use client';

import { Row, Col} from "antd";
import styles from "../styles/loader.module.css";

const Loader = () => {
    return(
        <Row className="fullRow" justify="center"> 
            <div className={styles.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Row>
    )
}

export default Loader;