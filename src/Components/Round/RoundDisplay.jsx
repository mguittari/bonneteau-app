import styles from "./RoundDisplay.module.css";

export default function RoundDisplay({ round }) {
	return (
		<div className={styles.round}>
			<p>Round : {round}/10</p>
		</div>
	);
}
