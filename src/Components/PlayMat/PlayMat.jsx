import CardSet from "../CardSet/CardSet";
import styles from "./PlayMat.module.css";

export default function PlayMat() {
	return (
		<div className={styles["play-mat"]}>
			<CardSet />
		</div>
	);
}
