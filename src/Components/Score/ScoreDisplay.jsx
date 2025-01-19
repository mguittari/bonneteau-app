import styles from "./ScoreDisplay.module.css";

export default function ScoreDisplay({ counter }) {
	return (
		<div className={styles.score}>
			<p>Score : {counter}</p>
		</div>
	);
}
