import CardSet from "../CardSet/CardSet";
import styles from "./PlayMat.module.css";

export default function PlayMat({ figures }) {
	console.log("fig in playmat -->", figures);
	return (
		<div className={styles["play-mat"]}>
			<CardSet figures={figures} />
		</div>
	);
}
