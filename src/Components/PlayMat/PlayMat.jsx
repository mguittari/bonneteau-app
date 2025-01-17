import CardSet from "../CardSet/CardSet";
import styles from "./PlayMat.module.css";

export default function PlayMat({ figures }) {
	return (
		<div className={styles["play-mat"]}>
			<CardSet figures={figures} />
		</div>
	);
}
