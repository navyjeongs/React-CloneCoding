import { Link } from "react-router-dom";
import icon1 from "../img/header-icon.jpeg";
import styles from "../css/Header.css"

export default function Headers() {
    return (
        <h1 className={styles.head}>
            <Link  to ="/">
                <img src ={icon1} alt="header" width="100px" height="75px">
                </img>
                JSFLIX
            </Link>
        </h1>
    );
}