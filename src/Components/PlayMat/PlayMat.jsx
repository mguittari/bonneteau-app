import CardSet from "../CardSet/CardSet";
import RoundDisplay from "../Round/RoundDisplay";
import ScoreDisplay from "../Score/ScoreDisplay";
import styles from "./PlayMat.module.css";

export default function PlayMat({ cards, setCards }) {
	return (
		<div className={styles["play-mat"]}>
			<CardSet cards={cards} setCards={setCards} />
			<ScoreDisplay />
			<RoundDisplay />
		</div>
	);
}
