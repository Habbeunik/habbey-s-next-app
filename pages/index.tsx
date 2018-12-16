import * as React from "react";
import PageLayout from "../src/layout/page";
import * as styles from "../styles/main.css";

interface homeProps {}

function HomePage(props) {
	return <div className={styles.pageBody}>This is my homepage</div>;
}

export default PageLayout(HomePage);
